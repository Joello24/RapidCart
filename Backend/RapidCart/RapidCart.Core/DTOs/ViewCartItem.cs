using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RapidCart.Web.ViewModels
{
    public class ViewCartItem
    {

        public int CartId { get; set; }

        public int ItemId { get; set; }
        public int UserId { get; set; }

        public int Quantity { get; set; }
        public decimal ItemPrice { get; set; }

        public decimal TotalPrice { get; set; }
        
        public string Category { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
    }
}
