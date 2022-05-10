using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core.Interfaces
{
    public interface IOrderItemRepository
    {
        Response<OrderItem> Insert(OrderItem orderItem);
        Response Update(OrderItem orderItem);
        Response Delete(int itemId);
        Response<Order> Get(int itemId);
    }
}