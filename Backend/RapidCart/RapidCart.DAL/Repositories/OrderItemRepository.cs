using Microsoft.EntityFrameworkCore;
using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.DAL.Repositories
{
    public class OrderItemRepository : IOrderItemRepository
    {
        public DBFactory DbFac { get; set; }

        public OrderItemRepository(DBFactory DbFac)
        {
            this.DbFac = DbFac;
        }

        public Response Delete(int orderId, int itemId)
        {
            var response = new Response<OrderItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.OrderItem.Find(orderId, itemId);
                    db.OrderItem.Remove(response.Data);
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
                response.Message = $"Failed to Delete OrderItem:{itemId} Order ID:{orderId}";
                response.Success = false;
            }
            return response;
        }

        public Response<OrderItem> Get(int orderId, int itemId)
        {
            var response = new Response<OrderItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.OrderItem.Find(orderId, itemId);
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"No OrderItem:{itemId} found with Order ID:{orderId}";
                response.Success = false;
            }
            return response;
        }

        public Response<OrderItem> Insert(OrderItem orderItem)
        {
            var response = new Response<OrderItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.OrderItem.Add(orderItem).Entity;
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
                response.Message = $"Failed to add OrderItem:{orderItem.ItemId} Order ID:{orderItem.OrderId}";
                response.Success = false;
            }
            return response;
        }

        public Response Update(OrderItem orderItem)
        {
            var response = new Response<OrderItem>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.OrderItem.Update(orderItem).Entity;
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
                response.Message = $"Failed to update OrderItem:{orderItem.ItemId} OrderID:{orderItem.OrderId}";
                response.Success = false;
            }
            return response;
        }

        public Response<List<OrderItem>> GetAll(int orderId)
        {
            var response = new Response<List<OrderItem>>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.OrderItem.Where(i => i.OrderId == orderId).ToList();
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"No OrderItems found for OrderID: {orderId}";
                response.Success = false;
            }
            return response;
        }
    }
}
