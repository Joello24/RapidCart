using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core
{
    public class ViewOrder
    {
        public int OrderId { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public decimal TotalCost { get; set; }
        [Required]
        public DateTime DateCreated { get; set; }
    }
}
