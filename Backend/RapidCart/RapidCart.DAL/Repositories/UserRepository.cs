using Microsoft.EntityFrameworkCore;
using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private DBFactory _dbFactory;
        public UserRepository(DBFactory dbFactory)
        {
            _dbFactory = dbFactory;
        }
        public Response Delete(int userId)
        {
            Response response = new Response();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    var address = db.Address.FirstOrDefault(x => x.UserId == userId);
                    var user = db.User.Where(i => i.UserId == userId).FirstOrDefault();
                    var order = db.Order.Where(i => i.UserId == userId).Include(i=> i.OrderItems).ToList();
                    db.Address.Remove(address);
                    db.Order.RemoveRange(order);
                    db.User.Remove(user);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    response.Message = ex.InnerException == null ? ex.Message : ex.InnerException.Message;

                    response.Success = false;
                    return response;
                }
            }
            response.Success = true;
            return response;
        }

        public Response<User> Get(int userId)
        {
            Response<User> response = new Response<User>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data= db.User.FirstOrDefault(x => x.UserId == userId);
                    if (response.Data == null)
                    {
                        response.Message = "User not found";
                        response.Success = false;
                        return response;
                    }
                }
                catch (Exception ex)
                {
                    response.Message = ex.InnerException == null ? ex.Message : ex.InnerException.Message;
                    response.Success = false;
                    return response;
                }
            }
            response.Success = true;
            return response;
        }

        public Response<User> GetByEmail(string email)
        {
            Response<User> response = new Response<User>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.User.FirstOrDefault(x => x.Email == email);
                    if (response.Data == null)
                    {
                        response.Message = $"User with email: {email} not found";
                        response.Success = false;
                        return response;
                    }
                }
                catch (Exception ex)
                {
                    response.Message = ex.InnerException == null ? ex.Message : ex.InnerException.Message;
                    response.Success = false;
                    return response;
                }
            }
            response.Success = true;
            return response;
        }

        public Response<User> Insert(User user)
        {
            Response<User> response = new Response<User>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.User.Add(user).Entity;
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

        public Response Update(User user)
        {
            Response response = new Response();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    db.User.Update(user);
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
