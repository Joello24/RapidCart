using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RapidCart.Core.Entities;

namespace RapidCart.Core
{
    public interface ICartRepository
    {
        Response<Cart> Insert(Cart cart);
        Response Update(Cart cart);
        Response Delete(int cartId);
        Response<Cart> Get(int cartId,int userId);

    }
}
