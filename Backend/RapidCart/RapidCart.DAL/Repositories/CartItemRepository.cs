﻿using RapidCart.Core;
using RapidCart.Core.Entities;
using RapidCart.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.DAL.Repositories
{
    public class CartItemRepository : ICartItemRepository
    {

        public DBFactory DbFac { get; set; }

        public CartItemRepository(DBFactory DbFac)
        {
            this.DbFac = DbFac;
        }

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

        public Response<CartItem> Insert(CartItem cartItem)
        {
            var response = new Response<CartItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.CartItem.Add(cartItem).Entity;
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

        public Response<List<CartItem>> GetAll(int cartId)
        {
            var response = new Response<List<CartItem>>() { Success = true };
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
            return response;
        }
    }
}
