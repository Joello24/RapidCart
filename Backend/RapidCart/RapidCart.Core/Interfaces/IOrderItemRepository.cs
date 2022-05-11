using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core
{
    public interface IOrderItemRepository
    {
        Response<OrderItem> Insert(OrderItem orderItem);
        Response Update(OrderItem orderItem);
        Response Delete(int orderId, int itemId);
        Response<OrderItem> Get(int orderId, int itemId);
        Response<List<OrderItem>> GetAll(int orderId);
    }
}