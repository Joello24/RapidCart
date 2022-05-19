using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace RapidCart.Web.ViewModels
{
    public class ViewItem
    {
        public int ItemId { get; set; }
        [Required]
        public int CategoryId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        [Range(0.01, int.MaxValue, ErrorMessage = "Please enter a valid decimal")]
        public int Inventory { get; set; }
        public string Path { get; set; }
        
    }
}
