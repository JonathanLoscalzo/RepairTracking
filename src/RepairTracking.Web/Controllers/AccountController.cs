using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RepairTracking.Infrastructure.Security;
using RepairTracking.Web.ViewModels;

namespace RepairTracking.Web.Controllers
{
    [ApiController, Route("api/[controller]/[action]")]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<RepairTrackingUser> signInManager;
        private readonly UserManager<RepairTrackingUser> userManager;
        private readonly IConfiguration configuration;

        public AccountController(
            UserManager<RepairTrackingUser> userManager,
            SignInManager<RepairTrackingUser> signInManager,
            IConfiguration configuration
            )
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
        }

        [HttpPost]
        public async Task<object> Login([FromBody] LoginDto model)
        {
            var result = await this.signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

            if (result.Succeeded)
            {
                var appUser = this.userManager.Users.SingleOrDefault(r => r.UserName == model.UserName);
                return await GenerateJwtToken(model.UserName, appUser);
            }
            
            return BadRequest("INVALID_LOGIN_ATTEMPT");
        }

        [Authorize(AuthenticationSchemes="Bearer")]
        public string Protected()
        {
            return "Protected";
        }

        [Authorize()]
        public string Protected2()
        {
            return "Protected2";
        }

        [Authorize(Roles = "Admin")]
        public string ProtectedAdmin()
        {
            return "ProtectedAdmin";
        }

        private async Task<string> GenerateJwtToken(string username, RepairTrackingUser user)
        {
            var roles = await userManager.GetRolesAsync(user);
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            claims.AddRange(roles.Select(x => new Claim(ClaimTypes.Role, x)));

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration["JWT:JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(this.configuration["JWT:JwtExpireDays"]));

            var token = new JwtSecurityToken(
                this.configuration["JWT:JwtIssuer"],
                this.configuration["JWT:JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}