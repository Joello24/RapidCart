using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Web.ViewModels
{
    public class ViewAddress
    {
        
        [Required]
        public int AddressId { get; set; }
        
        [Required]
        public int UserId { get; set; }
       
        [Required]
        [StringLength(50, ErrorMessage = "Street name must be less than 50 characters.")]
        public string Street { get; set; }
       
        [Required]
        [StringLength(50, ErrorMessage = "City name must be less than 50 characters.")]
        public string City { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "State name must be less than 50 characters.")]
        public string State { get; set; }
        [Required]
        [StringLength(15, ErrorMessage = "PostalCode name must be less than 15 characters.")]
        public string PostalCode { get; set; }
        [Required]
        [StringLength(5, ErrorMessage = "CountryCode name must be less than 5 characters.")]
        public string CountryCode { get; set; }
      
    }
}




