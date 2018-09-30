using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using RepairTracking.Infrastructure.Data;
using RepairTracking.Infrastructure.Security;

namespace RepairTracking.Web.Configuration
{
    public static class SecurityConfiguration
    {
        public static IServiceCollection AddSecurity(this IServiceCollection services, IConfiguration configuration)
        {
            // ===== Add Identity ========
            services.AddIdentity<RepairTrackingUser, IdentityRole>()
                .AddEntityFrameworkStores<RepairTrackingContext>()
                .AddDefaultTokenProviders();

            // ===== Add Jwt Authentication ========
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); // => remove default claims
            services
                .AddAuthorization()
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                // .AddAuthentication(options =>
                // {
                //     options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                //     options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                //     options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                // })
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;
                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = configuration["JWT:JwtIssuer"],
                        ValidAudience = configuration["JWT:JwtIssuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:JwtKey"])),
                        ClockSkew = TimeSpan.Zero // remove delay of token when expire
                    };
                });

            return services;
        }

        public static async Task CreateRoles(this IServiceProvider serviceProvider)
        {
            //initializing custom roles   
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            string[] roleNames = { "Admin", "Employee" };
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                var roleExist = await RoleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    //create the roles and seed them to the database: Question 1  
                    roleResult = await RoleManager.CreateAsync(new IdentityRole(roleName));
                }
            }
        }

        public static async Task CreateAdmin(this IServiceProvider serviceProvider)
        {
            //initializing custom roles   
            var UserManager = serviceProvider.GetRequiredService<UserManager<RepairTrackingUser>>();
            string[] roleNames = { "Admin", "Employee" };

            var admin = await UserManager.FindByEmailAsync("admin@repairtracking.com");
            if (admin == null)
            {
                admin = new RepairTrackingUser()
                {
                    UserName = "Admin",
                    Email = "admin@repairtracking.com",
                };

                var result = await UserManager.CreateAsync(admin, "1234ABab@");
                if (result.Succeeded)
                {
                    await UserManager.AddToRoleAsync(admin, "Admin");
                };

            }
        }
    }
}