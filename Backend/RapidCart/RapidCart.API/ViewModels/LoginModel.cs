using System.ComponentModel.DataAnnotations;

namespace RapidCart.Web.ViewModels
{

    public class LoginModel
    {
        [Required]
        [StringLength(50, ErrorMessage = "Username/Email must be less than 50 characters")]
        public string UserName { get; set; }
        [Required]
        [StringLength(250, ErrorMessage = "Password must be less than 250 characters.")]
        public string Password { get; set; }
    }
}