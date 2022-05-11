using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RapidCart.Core;
using RapidCart.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RapidCart.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderItemController : Controller
    {
        private readonly IOrderItemRepository _orderItemRepository;
        public OrderItemController(IOrderItemRepository orderItemRepository)
        {
            _orderItemRepository = orderItemRepository;
        }

        [HttpGet]
        [Route("/api/[controller]/{orderId}/{itemId}", Name ="GetOrderItem")]
        public IActionResult GetOrderItem(int orderId, int itemId)
        {
            var result = _orderItemRepository.Get(orderId,itemId);

            if (result == null)
            {
                return NotFound();
            }
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
        [HttpGet]
        [Route("/api/[controller]/GetAll/{id}")]
        public IActionResult GetAllOrderItems(int id)
        {
            var result = _orderItemRepository.GetAll(id);

            if (result == null)
            {
                return NotFound();
            }
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost]
        public IActionResult AddOrderItem(ViewOrderItem model)
        {
            if (ModelState.IsValid)
            {
                OrderItem orderItem = new OrderItem
                {
                    OrderId = model.OrderId,
                    ItemId = model.ItemId,
                    ItemPrice = model.ItemPrice,
                    Quantity = model.Quantity,
                    TotalCost = model.TotalCost
                };

                var result = _orderItemRepository.Insert(orderItem);

                if (result.Success)
                {
                    return CreatedAtRoute(nameof(GetOrderItem), new { orderId = result.Data.OrderId, itemId = result.Data.ItemId }, result.Data);
                }
                else
                {
                    return BadRequest(result.Message);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut]
        [Authorize]
        [Route("/api/[controller]/{id}")]
        public IActionResult EditOrderItem(ViewOrderItem model)
        {
            if (ModelState.IsValid)
            {
                OrderItem orderItem = new OrderItem
                {
                    OrderId = model.OrderId,
                    ItemId = model.ItemId,
                    ItemPrice = model.ItemPrice,
                    Quantity = model.Quantity,
                    TotalCost = model.TotalCost
                };

                if (!_orderItemRepository.Get(orderItem.OrderId,orderItem.ItemId).Success)
                {
                    return NotFound($"OrderItem with OrderId:{orderItem.OrderId} & ItemId:{orderItem.ItemId} not found");
                }

                var result = _orderItemRepository.Update(orderItem);
                if (result.Success)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest(result.Message);
                }
            }
            else
            {
                if (model.OrderId < 1)
                    ModelState.AddModelError("OrderId", "Invalid Order ID");
                if (model.ItemId < 1)
                    ModelState.AddModelError("ItemId", "Invalid Item ID");
                return BadRequest(ModelState);
            }
        }

        [HttpDelete]
        [Authorize]
        [Route("/api/[controller]/{orderId}/{itemId}")]
        public IActionResult DeleteOrderItem(int orderId, int itemId)
        {
            if (!_orderItemRepository.Get(orderId, itemId).Success)
            {
                return NotFound($"OrderItem with OrderId:{orderId} & ItemId:{itemId} not found");
            }

            var result = _orderItemRepository.Delete(orderId, itemId);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result.Message);
            }
        }
    }
}
