using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core.Interfaces
{
    public interface ICartRepository
    {
        Response<Cart> Insert(Cart cart);
        Response Update(Cart cart);
        Response Delete(int cartId);
        Response<Cart> Get(int cartId,int userId);

    }
}
