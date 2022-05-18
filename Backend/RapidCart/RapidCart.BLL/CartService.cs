using RapidCart.Core;
using RapidCart.Core.Entities;

namespace RapidCart.BLL
{
    public class CartService 
    {
        private readonly ICartRepository _cartRepository;
        private readonly ICartItemRepository _cartItemRepository;
        
        public CartService(ICartRepository cartRepository, ICartItemRepository cartItemRepository)
        {
            _cartRepository = cartRepository;
            _cartItemRepository = cartItemRepository;
        }
        
        public Response<Cart> GetCart(int cartId)
        {
            var res = _cartRepository.Get(cartId);
            return res;
        }
        
        public Response<CartItem> AddToCart(CartItem cartItem, int userId)
        {
            var response = new Response<CartItem>();
            if (HasDuplicates(cartItem))
            {
                 response = _cartItemRepository.IncrementCount(cartItem);
            }
            else
            {
                 response = _cartItemRepository.Insert(cartItem,userId);
            }
            return response;
        }

        private bool HasDuplicates(CartItem cartItem)
        {
            var check = _cartItemRepository.Get(cartItem.CartId, cartItem.ItemId);
            if (check.Success)
            {
                return true;
            }
            if(check.Data != null)
            {
                return true;
            }
            return false;
        }

    }
}