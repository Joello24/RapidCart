using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace RapidCart.Web.ViewModels
{
    public class ViewCart
    {
        [Required]
        public int CartId { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public DateTime DateCreated { get; set; }
        [Required]
        public int OrderId { get; set; }
    }
}
