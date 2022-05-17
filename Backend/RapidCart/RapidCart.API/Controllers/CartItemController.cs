﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RapidCart.Core.Entities;
using RapidCart.Core.Interfaces;
using RapidCart.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RapidCart.Web.Controllers
{
    public class CartItemController : Controller
    {
        private readonly ICartItemRepository _cartItemRepository;
        public CartItemController(ICartItemRepository cartItemRepository)
        {
            _cartItemRepository = cartItemRepository;
        }

        [HttpGet]
        [Route("/api/[controller]/{cartId}/{itemId}", Name = "GetCartItem")]
        public IActionResult GetCartItem(int cartId, int itemId)
        {
            var result = _cartItemRepository.Get(cartId, itemId);

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
        public IActionResult GetAllCartItems(int id)
        {
            var result = _cartItemRepository.GetAll(id);

            if (result == null)
            {
                return NotFound();
            }
            if (result.Success)
            {
                if(result.Data.Count == 0)
                {
                    return BadRequest($"No Items where found for CartId:{id}");
                }
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost]
        public IActionResult AddCartItem(ViewCartItem model)
        {
            if (ModelState.IsValid)
            {
                CartItem cartItem = new CartItem
                {
                    CartId = model.CartId,
                    ItemId = model.ItemId,
                    ItemPrice = model.ItemPrice,
                    Quantity = model.Quantity,
                    TotalPrice = model.TotalPrice
                };

                var result = _cartItemRepository.Insert(cartItem);

                if (result.Success)
                {
                    return CreatedAtRoute(nameof(GetCartItem), new { cartId = result.Data.CartId, itemId = result.Data.ItemId }, result.Data);
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
        [Route("/api/[controller]/{cartId}/{itemId}")]
        public IActionResult EditCartItem(ViewCartItem model)
        {
            if (ModelState.IsValid)
            {
                CartItem cartItem = new CartItem
                {
                    CartId = model.CartId,
                    ItemId = model.ItemId,
                    ItemPrice = model.ItemPrice,
                    Quantity = model.Quantity,
                    TotalPrice = model.TotalPrice
                };

                if (!_cartItemRepository.Get(cartItem.CartId, cartItem.ItemId).Success)
                {
                    return NotFound($"CartItem with CartId:{cartItem.CartId} & ItemId:{cartItem.ItemId} not found");
                }

                var result = _cartItemRepository.Update(cartItem);
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
                if (model.CartId < 1)
                    ModelState.AddModelError("CartId", "Invalid CartId");
                if (model.ItemId < 1)
                    ModelState.AddModelError("ItemId", "Invalid Item ID");
                return BadRequest(ModelState);
            }
        }

        [HttpDelete]
        [Authorize]
        [Route("/api/[controller]/{cartId}/{itemId}")]
        public IActionResult DeleteCartItem(int cartId, int itemId)
        {
            if (!_cartItemRepository.Get(cartId, itemId).Success)
            {
                return NotFound($"CartItem with CartId:{cartId} & ItemId:{itemId} not found");
            }

            var result = _cartItemRepository.Delete(cartId, itemId);
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
