using System;
using System.Collections.Generic;
using System.Linq;
using RapidCart.Core;

namespace RapidCart.DAL.Repositories
{
    public class CategoryRepository : ICategoryRepository 
    {
        private readonly DBFactory _dbFactory;
        public CategoryRepository(DBFactory dbFactory)
        {
            _dbFactory = dbFactory;
        }

        public Response<Category> Get(int categoryId)
        {
            Response<Category> response = new Response<Category>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Category.FirstOrDefault(i => i.CategoryId == categoryId);
                    if (response.Data == null)
                    {
                        response.Success = false;
                        response.Message = "Can't find category";
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
        public Response<List<Category>> GetAll()
        {
            Response<List<Category>> response = new Response<List<Category>>();
            using (var db = _dbFactory.GetDbContext())
            {
                try
                {
                    response.Data = db.Category.ToList();
                    if (response.Data.Count == 0)
                    {
                        response.Success = false;
                        response.Message = "No categories found";
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
    }
}