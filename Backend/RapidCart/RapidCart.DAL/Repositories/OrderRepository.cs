using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using RapidCart.Core;

namespace RapidCart.DAL.Repositories
{
    public class OrderRespository : IOrderRepository
    {
        private DBFactory _dbFactory;
        public OrderRespository(DBFactory fac)
        {
            _dbFactory = fac;
        }

        public Response<Order> Insert(Order order)
        {
            var response = new Response<Order>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Order.Add(order).Entity;
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

        public Response Update(Order order)
        {
            var response = new Response();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    db.Order.Update(order);
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

        public Response Delete(int orderId)
        {
            var response = new Response();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    var order = db.Order.Where(i => i .OrderId == orderId).Include(i => i .OrderItems).FirstOrDefault();
                    db.Order.Remove(order);
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

        public Response<Order> Get(int orderId)
        {
            var response = new Response<Order>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Order.Find(orderId);
                    if(response.Data == null)
                    {
                        response.Message = "Order not found";
                        response.Success = false;
                        return response;
                    }
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

        public Response<List<Order>> GetByUser(int userId)
        {
            var response = new Response<List<Order>>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Order.Where(o => o.UserId == userId).ToList();
                    if (response.Data.Count == 0)
                    {
                        response.Message = "No orders found";
                        response.Success = false;
                        return response;
                    }
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
    }
}