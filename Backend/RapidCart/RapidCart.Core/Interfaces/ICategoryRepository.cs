using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core.Interfaces
{
    public interface ICategoryRepository
    {
        Response<Category> Get(int categoryId);
        Response<List> Category>> GetAll();
    }
}