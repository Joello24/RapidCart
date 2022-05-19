using Microsoft.AspNetCore.Mvc;
using RapidCart.Core;
using RapidCart.Web.ViewModels;


namespace RapidCart.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : Controller
    {

        private readonly IItemRepository _itemRepository;

        public ItemController(IItemRepository itemRepository)
        {
            _itemRepository = itemRepository;
        }

        [HttpGet]
        [Route("/api/[controller]/{id}", Name = "GetItem")]
        public IActionResult GetItem(int id)
        {
            var item = _itemRepository.Get(id);
            if (item.Success)
            {
                return Ok(item.Data);
            }
            else
            {
                return BadRequest(item.Message);
            }
        }
        [HttpGet]
        public IActionResult GetItems()
        {
            var items = _itemRepository.GetAll();
            if (items.Success)
            {
                if(items.Data.Count > 0)
                {
                    return Ok(items.Data);
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest(items.Message);
            }
        }
        [HttpPost]
        public IActionResult Insert([FromBody] ViewItem viewItem)
        {
            if (ModelState.IsValid)
            {
                var item = new Item()
                {
                    CategoryId = viewItem.CategoryId,
                    Name = viewItem.Name,
                    Description = viewItem.Description,
                    Price = viewItem.Price,
                    Inventory = viewItem.Inventory,
                };
                var result = _itemRepository.Insert(item);
                if (result.Success)
                {
                    return CreatedAtRoute("GetItem", new { id = item.ItemId }, item);
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
        public IActionResult Update([FromBody] ViewItem viewItem)
        {
            if (ModelState.IsValid && viewItem.ItemId > 0)
            {
                var item = new Item
                {
                    ItemId = viewItem.ItemId,
                    CategoryId = viewItem.CategoryId,
                    Name = viewItem.Name,
                    Description = viewItem.Description,
                    Price = viewItem.Price,
                    Inventory = viewItem.Inventory,
                    Path = viewItem.Path
                };
                var result = _itemRepository.Update(item);
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
        [HttpDelete("{ItemId}")]
        public IActionResult Delete(int itemId)
        {
            var result = _itemRepository.Get(itemId);
            if (!result.Success)
            {
                return NotFound();
            }
            var res = _itemRepository.Delete(itemId);
            if (!res.Success)
            {
                return BadRequest(res.Message);
            }
            return Ok("Deleted Successfully");
        }

    }
}
