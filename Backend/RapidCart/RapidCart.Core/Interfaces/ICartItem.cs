using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core.Interfaces
{
    public interface ICartItemRepository
    {
        Response<CartItem> Insert(CartItem cartItem);
        Response Update(CartItem cartItem);
        Response Delete(int cartId, int itemId);
        Response<CartItem> Get(int cartId, int itemId);
        Response<List<CartItem>> GetAll(int orderId);
    }
}
