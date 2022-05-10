using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core
{
    public interface ICategoryRepository
    {
        Response<Category> Get(int categoryId);
        Response<List<Category>> GetAll();
    }
}