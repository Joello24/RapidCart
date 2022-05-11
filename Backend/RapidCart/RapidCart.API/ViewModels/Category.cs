using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Web.ViewModels
{
    [Table("Category")]
    public class Category
    {
        public int CategoryId { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Category name cannot be longer than 50 characters.")]
        public string Name { get; set; }

    }
}
