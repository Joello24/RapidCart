using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core
{
    public class Permissions
    {
        [Key]
        public int PermissionId { get; set; }
        public string PermissionName { get; set; }
    }
}
