using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core
{
    public interface IUserRepository
    {
        Response<User> Insert(User user);
        Response Update(User user);
        Response Delete(int userId);
        Response<User> Get(int userId);
        Response<User> GetByEmail(string email);
    }
}
