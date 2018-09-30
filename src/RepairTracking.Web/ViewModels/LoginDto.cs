using System.ComponentModel.DataAnnotations;

namespace RepairTracking.Web.ViewModels
{
    public class LoginDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}