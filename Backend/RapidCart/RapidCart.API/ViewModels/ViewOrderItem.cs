using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Web.ViewModels
{
    public class ViewOrderItem
    {
        [Required]
        public int OrderId { get; set; }
        [Required]
        public int ItemId { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Please enter valid integer")]
        public int Quantity { get; set; }
        [Required]
        [Range(0.01, int.MaxValue, ErrorMessage = "Please enter valid decimal")]
        public decimal ItemPrice { get; set; }
        [Required]
        [Range(0.01, int.MaxValue, ErrorMessage = "Please enter valid decimal")]
        public decimal TotalCost { get; set; }
    }
}
