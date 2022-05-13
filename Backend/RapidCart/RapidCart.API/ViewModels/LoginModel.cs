using System.ComponentModel.DataAnnotations;

namespace RapidCart.Web.ViewModels
{

    public class LoginModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}