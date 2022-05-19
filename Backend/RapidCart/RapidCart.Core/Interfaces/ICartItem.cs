using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RapidCart.Web.ViewModels;

namespace RapidCart.Core
{
    public interface ICartItemRepository
    {
        Response<CartItem> Insert(CartItem cartItem, int userId);
        Response Update(CartItem cartItem);
        Response Delete(int cartId, int itemId);
        Response<CartItem> Get(int cartId, int itemId);
        Response<List<ViewCartItem>> GetAll(int orderId);
        Response<CartItem> IncrementCount(CartItem cartItem);
        Response<CartItem> IncrementCount(CartItem cartItem, int quantity);
        Response<CartItem> DecrementCount(CartItem cartItem);
        Response ClearCart(int cartId);
    }
}
