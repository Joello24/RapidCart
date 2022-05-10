using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core.Interfaces
{
    public interface IOrderRepository
    {
        Response<Order> Insert(Order order);
        Response Update(Order order);
        Response Delete(int orderId);
        Response<Order> Get(int orderId);
        Response<List<Order>> GetByUser(int userId);

    }
}