using Microsoft.AspNetCore.Mvc;
using RapidCart.Core;
using RapidCart.Web.ViewModels;

namespace RapidCart.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
        // Response<Order> Insert(Order order);
        // Response Update(Order order);
        // Response Delete(int orderId);
        // Response<Order> Get(int orderId);
        // Response<List<Order>> GetByUser(int userId);
        [HttpGet]
        [Route("/api/[controller]/{id}", Name = "GetOrder")]
        public IActionResult GetOrder(int id)
        {
            var order = _orderRepository.Get(id);
            if (!order.Success)
            {
                return NotFound();
            }
            return Ok(order.Data);
        }
        [HttpGet]
        [Route("/api/[controller]/user/{id}", Name = "GetOrdersByUser")]
        public IActionResult GetOrdersByUser(int id)
        {
            var orders = _orderRepository.GetByUser(id);
            if (!orders.Success)
            {
                return NotFound();
            }
            return Ok(orders.Data);
        }

        [HttpPost]
        public IActionResult Insert([FromBody] ViewOrder viewOrder)
        {
            if(ModelState.IsValid)
            {
                var order = new Order
                {
                    UserId = viewOrder.UserId,
                    TotalCost = viewOrder.TotalCost,
                    DateCreated = viewOrder.DateCreated,
                };
                var result = _orderRepository.Insert(order);
                if (!result.Success)
                {
                    return BadRequest(result.Message);
                }

                return CreatedAtRoute("GetOrder", new {id = result.Data.OrderId}, result);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        
        [HttpPut]
        public IActionResult Update([FromBody] ViewOrder viewOrder)
        {
            if(ModelState.IsValid && viewOrder.OrderId > 0)
            {
                var order = new Order
                {
                    OrderId = viewOrder.OrderId,
                    UserId = viewOrder.UserId,
                    TotalCost = viewOrder.TotalCost,
                    DateCreated = viewOrder.DateCreated,
                };
                var result = _orderRepository.Update(order);
                if (!result.Success)
                {
                    return BadRequest(result.Message);
                }
                
                return Ok("Updated Successfully");
                
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpDelete("{OrderId}")]
        public IActionResult Delete(int OrderId)
        {
            var result = _orderRepository.Get(OrderId);
            if (!result.Success)
            {
                return NotFound();
            }
            var res = _orderRepository.Delete(OrderId);
            if (!res.Success)
            {
                return BadRequest(res.Message);
            }
            return Ok("Deleted Successfully");
        }

    }
}