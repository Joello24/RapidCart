using RapidCart.Core.Entities;

namespace RapidCart.Core
{
    public interface ICartService
    {
        public Response<Cart> GetCart(int cartId);
        public Response<CartItem> AddToCart(CartItem cartItem, int userId);
    }
}