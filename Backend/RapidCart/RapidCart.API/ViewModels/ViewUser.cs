using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core
{
    public class ViewUser
    {
        public int UserId { get; set; }
        
        [Required]
        [StringLength(50, ErrorMessage = "First name must be less than 50 characters.")]
        public string FirstName { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Last name must be less than 50 characters.")]
        public string LastName { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Email must be less than 50 characters.")]
        public string Email { get; set; }
        [Required]
        [StringLength(250, ErrorMessage = "Password must be less than 250 characters.")]
        public string Password { get; set; }
        [Required]
        [StringLength(20, ErrorMessage = "Phone must be less than 50 characters.")]
        public string Phone { get; set; }
        [Required]
        public int PermissionId { get; set; }
        
    }
}
