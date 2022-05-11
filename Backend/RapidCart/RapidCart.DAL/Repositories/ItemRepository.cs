using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using RapidCart.Core;


namespace RapidCart.DAL.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private DBFactory _dbFactory;
        public ItemRepository(DBFactory dbFactory)
        {
            _dbFactory = dbFactory;
        }

        public Response Delete(int itemId)
        {
            var response = new Response();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    var item = db.Item.Where(i => i.ItemId == itemId).Include(i => i.OrderItem).FirstOrDefault();

                    db.Item.Remove(item);
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

        public Response<Item> Get(int itemId)
        {
            Response<Item> response = new Response<Item>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Item.Where(x => x.ItemId == itemId).FirstOrDefault();
                    if (response.Data == null)
                    {
                        response.Message = "Item not found";
                        response.Success = false;
                        return response;
                    }
                }
                catch (Exception ex)
                {
                    response.Message = ex.Message;
                    response.Success = false;
                    return response;
                }
            }
            response.Success = true;
            return response;
        }

        public Response<Item> Insert(Item item)
        {
            Response<Item> response = new Response<Item>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Item.Add(item).Entity;
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

        public Response Update(Item item)
        {
            Response response = new Response();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    db.Item.Update(item);
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
    }

}
