using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using RapidCart.Core.Entities;
using RapidCart.Web.ViewModels;
using Category = RapidCart.Core.Enums.Category;

namespace RapidCart.DAL.Repositories
{
    public class CartItemRepository : ICartItemRepository
    {

        public DBFactory DbFac { get; set; }
        public CartRepository CartRepo { get; set; }

        public CartItemRepository(DBFactory DbFac, CartRepository CartRepo)
        {
            this.DbFac = DbFac;
            this.CartRepo = CartRepo;
        }

        // private void CleanUpCart(int cartId)
        // {
        //     using (var db = DbFac.GetDbContext())
        //     {
        //         // find duplicates, delete them and use count as CartItem.quantity
        //         var items = db.CartItem.Where(i => i.CartId == cartId);
        //         var query = items.GroupBy(x => x.ItemId)
        //             .Where(g => g.Count() > 1)
        //             .Select(y => new {Element = y.Key, Count = y.Count()})
        //             .ToList();
        //         Console.WriteLine(query);
        //         foreach (var e in query)
        //         {
        //             for (int i = 1; i < e.Count; i++)
        //             {
        //                 var item = items.FirstOrDefault(i => i.ItemId == e.Element);
        //                 db.CartItem.Remove(item);
        //                 db.SaveChanges();
        //             }
        //             db.CartItem.FirstOrDefault(i => i.ItemId == e.Element).Quantity = e.Count;
        //             db.SaveChanges();
        //         }
        //     }
        // }

        public Response Delete(int cartId, int itemId)
        {
            var response = new Response<CartItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.CartItem.Find(cartId, itemId);
                    db.CartItem.Remove(response.Data);
                    db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"Failed to Delete CartItem:{itemId} Cart ID:{cartId}";
                response.Success = false;
            }
            return response;
        }

        public Response<CartItem> Get(int cartId, int itemId)
        {
            var response = new Response<CartItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.CartItem.Find(cartId, itemId);
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"No CartItem:{itemId} found with Cart ID:{cartId}";
                response.Success = false;
            }
            return response;
        }

        public Response<CartItem> Insert(CartItem cartItem, int userId)
        {
            var response = new Response<CartItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    var cart = db.Cart.Where(i => i.CartId == cartItem.CartId);
                    if (cart == null)
                    {
                        Cart cartToInsert = new Cart()
                        {
                            UserId = userId,
                            DateCreated = new DateTime()
                        };
                        var ret = CartRepo.Insert(cartToInsert);
                        if (ret.Success)
                        {
                            cartItem.CartId = ret.Data.CartId;
                            db.CartItem.Add(cartItem);
                            db.SaveChanges();
                        }
                        else
                        {
                            response.Message = ret.Message;
                            response.Success = false;
                        }
                    }
                    else
                    {
                        response.Data = db.CartItem.Add(cartItem).Entity;
                        db.SaveChanges();
                    }
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"Failed to add CartItem:{cartItem.ItemId} Cart ID:{cartItem.CartId}";
                response.Success = false;
            }
            return response;
        }

        public Response Update(CartItem cartItem)
        {
            var response = new Response<CartItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.CartItem.Update(cartItem).Entity;
                    db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"Failed to update CartItem:{cartItem.ItemId} CartId:{cartItem.CartId}";
                response.Success = false;
            }
            return response;
        }

        public Response<List<ViewCartItem>> GetAll(int cartId)
        {
            var response = new Response<List<CartItem>>() { Success = true };
            var ret = new Response<List<ViewCartItem>>();
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.CartItem.Where(i => i.CartId == cartId).ToList();
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"No CartItem found for CartId: {cartId}";
                response.Success = false;
            }

            using (var db = DbFac.GetDbContext())
            {
                List<ViewCartItem> cartItems = new List<ViewCartItem>();
                foreach (var c in response.Data)
                {
                    ViewCartItem cartItem = new ViewCartItem();
                    cartItem.CartId = c.CartId;
                    cartItem.ItemId = c.ItemId;
                    cartItem.ItemPrice = c.ItemPrice;
                    cartItem.Quantity = c.Quantity;
                    cartItem.TotalPrice = c.TotalPrice;

                    cartItem.Name = db.Item.Where(i => i.ItemId == c.ItemId).Select(i => i.Name).FirstOrDefault();
                    int cat = (db.Item.Where(i => i.ItemId == c.ItemId).Select(i => i.CategoryId).FirstOrDefault());
                    Category category = (Category)cat;
                    cartItem.Category = category.ToString();
                    cartItem.Path = db.Item.Where(i => i.ItemId == c.ItemId).Select(i => i.Path).FirstOrDefault();

                    cartItems.Add(cartItem);
                    
                }
                ret.Data = cartItems;
            }
            ret.Success = true;
            return ret;
        }

        public Response<CartItem> IncrementCount(CartItem cartItem)
        {
            var response = new Response<CartItem>();
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    var cartItemDb = db.CartItem.Where(i => i.ItemId == cartItem.ItemId && i.CartId == cartItem.CartId).FirstOrDefault();
                    cartItemDb.Quantity++;
                    cartItemDb.TotalPrice = cartItemDb.ItemPrice * cartItemDb.Quantity;
                    db.SaveChanges();
                    response.Data = cartItemDb;
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"Failed to update CartItem:{cartItem.ItemId} CartId:{cartItem.CartId}";
                response.Success = false;
            }
            return response;
        }

        public Response<CartItem> IncrementCount(CartItem cartItem, int quantity)
        {
            var response = new Response<CartItem>();
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    var cartItemDb = db.CartItem.Where(i => i.ItemId == cartItem.ItemId && i.CartId == cartItem.CartId).FirstOrDefault();
                    cartItemDb.Quantity += quantity;
                    cartItemDb.TotalPrice = cartItemDb.ItemPrice * cartItemDb.Quantity;
                    db.SaveChanges();
                    response.Data = cartItemDb;
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"Failed to update CartItem:{cartItem.ItemId} CartId:{cartItem.CartId}";
                response.Success = false;
            }
            return response;
        }

        public Response<CartItem> DecrementCount(CartItem cartItem)
        {
            var response = new Response<CartItem>();
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    var cartItemDb = db.CartItem.Where(i => i.ItemId == cartItem.ItemId && i.CartId == cartItem.CartId).FirstOrDefault();
                    if (cartItemDb.Quantity > 1)
                    {
                        cartItemDb.Quantity--;
                        cartItemDb.TotalPrice = cartItemDb.ItemPrice * cartItemDb.Quantity;
                        db.SaveChanges();
                        response.Data = cartItemDb;
                    }
                    else
                    {
                        response.Message = $"Failed to update CartItem:{cartItem.ItemId} CartId:{cartItem.CartId}";
                        response.Success = false;
                    }
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"Failed to update CartItem:{cartItem.ItemId} CartId:{cartItem.CartId}";
                response.Success = false;
            }
            return response;
        }

        public Response ClearCart(int cartId)
        {
            Response response = new Response();
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    var cartItems = db.CartItem.Where(i => i.CartId == cartId).ToList();
                    foreach (var cartItem in cartItems)
                    {
                        db.CartItem.Remove(cartItem);
                    }
                    db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            response.Success = true;
            return response;
        }
    }
}
