using RapidCart.Core;
using RapidCart.Core.Entities;
using RapidCart.Core;
using System;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace RapidCart.DAL.Repositories
{
    public class CartRepository : ICartRepository
    {
        private DBFactory _dbFactory;
        public CartRepository(DBFactory dbFactory)
        {
            _dbFactory = dbFactory;
        }
        public Response Delete(int cartId)
        {
            var response = new Response();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    var cart = db.Cart.Where(i => i.CartId == cartId).FirstOrDefault();

                    db.Cart.Remove(cart);
                    db.SaveChanges();
                }
                catch (Exception e)
                {
                    response.Message = e.InnerException == null ? e.Message : e.InnerException.Message;
                    response.Success = false;
                    return response;
                }
            }
            response.Success = true;
            return response;
        }



        public Response<Cart> Get(int userId, int cartId)
        {

            var response = new Response<Cart>() { Success = true };
            try
            {
                using (var db = _dbFactory.GetDbContext())
                {
                    response.Data = db.Cart.Find(userId, cartId);
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"No Cart:{userId} found with Cart ID:{cartId}";
                response.Success = false;
            }
            return response;
        }
        public Response<Cart> Insert(Cart cart)
        {
            Response<Cart> response = new Response<Cart>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Cart.Add(cart).Entity;
                    db.SaveChanges();
                }
                catch (Exception e)
                {
                    response.Message = e.InnerException == null ? e.Message : e.InnerException.Message;

                    response.Success = false;
                    return response;
                }
            }
            response.Success = true;
            return response;
        
    }

    

    public Response Update(Cart cart)
        {
            var response = new Response<Cart>() { Success = true };
            try
            {
                using (var db = _dbFactory.GetDbContext())
                {
                    response.Data = db.Cart.Update(cart).Entity;
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
                response.Message = $"Failed to update Cart with Id {cart.CartId}";
                response.Success = false;
            }
            return response;
        }

    }
}




