using Microsoft.AspNetCore.Mvc;
using RapidCart.Core;

namespace RapidCart.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet]
        [Route("/api/[controller]/{id}")]
        public IActionResult GetCategory(int id)
        {
            var result = _categoryRepository.Get(id);
            
            if (result == null)
            {
                return NotFound();
            }
            if(result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            var result = _categoryRepository.GetAll();
            if (result.Success)
            {
                if(result.Data.Count == 0)
                {
                    return NotFound();
                }
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}