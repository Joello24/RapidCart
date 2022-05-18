using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using RapidCart.Core;
using RapidCart.Web.ViewModels;
using RapidCart.Core;
using RapidCart.Core.Entities;

namespace RapidCart.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : Controller
    {
        private readonly ICartRepository _cartRepository;
        
        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }
        // GET: api/<UserController>
        [HttpGet]
        [Route("/api/[controller]/{id}", Name = "GetCart")]
        public IActionResult GetCart(int id)
        {
            var cart = _cartRepository.Get(id);
            if (cart.Success)
            {
                return Ok(cart.Data);
            }
            else
            {
                return BadRequest(cart.Message);
            }
        }

        [HttpPost]
        public IActionResult AddCart(ViewCart model)
        {
            if (ModelState.IsValid)
            {
                Cart cart = new Cart
                {
                    CartId = model.CartId,
                    UserId = model.UserId,
                    DateCreated = model.DateCreated,
                    OrderId = null
                };
                
                var result = _cartRepository.Insert(cart);

                if (result.Success)
                {
                    return CreatedAtRoute("GetCart", new { cartId = result.Data.CartId }, cart);
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
        [HttpPut, Authorize]
        public IActionResult UpdateCart([FromBody] ViewCart model)
        {
            if (ModelState.IsValid && model.CartId > 0)
            {
                var cart = new Cart()
                {
                    CartId = model.CartId,
                    UserId = model.UserId,
                    DateCreated = model.DateCreated,
                    OrderId = model.OrderId
                };

                var cartToUpdate = _cartRepository.Get(cart.UserId);
                if (cartToUpdate == null)
                {
                    return NotFound();
                }

                var result = _cartRepository.Update(cart);
                if (result.Success)
                {
                    return Ok("Cart updated successfully");
                }
                else
                {
                    return BadRequest(result.Message);
                }
            }
            else
            {
                if (model.CartId < 1)
                    ModelState.AddModelError("CartId", "Invalid Cart Id");
                return BadRequest(ModelState);
            }
        }        
    }
}
