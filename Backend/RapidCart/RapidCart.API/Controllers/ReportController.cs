using Microsoft.AspNetCore.Mvc;
using RapidCart.Core;

namespace RapidCart.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportController : Controller
    {
        private readonly IReportRepository _reportRepository;
        public ReportController(IReportRepository reportRepository)
        {
            _reportRepository = reportRepository;
        }
        
        [HttpGet]
        [Route("/api/[controller]/search/{searchTerm}", Name="SearchItems")]
        public IActionResult SearchItems(string searchTerm)
        {
            var items = _reportRepository.SortItems(searchTerm);
            if (items.Success)
            {
                if (items.Data.Count == 0)
                {
                    return NotFound(items.Message);
                }
                return Ok(items.Data);
            }
            return BadRequest(items.Message);
        }
        
        [HttpGet]
        [Route("/api/[controller]/OrderReport/{id}", Name="OrderReport")]
        public IActionResult OrderReport(int id)
        {
            var items = _reportRepository.GetOrderReport(id);
            if (items.Success)
            {
                if (items.Data.Count == 0)
                {
                    return NotFound(items.Message);
                }
                return Ok(items.Data);
            }
            return BadRequest(items.Message);
        }
        
        [HttpGet]
        [Route("/api/[controller]/GetByCategory/{category}", Name="GetByCategory")]
        public IActionResult GetByCategory(int category)
        {
            var items = _reportRepository.SortByCategory(category);
            if (items.Success)
            {
                if (items.Data.Count == 0)
                {
                    return NotFound(items.Message);
                }
                return Ok(items.Data);
            }
            return BadRequest(items.Message);
        }
        
    }
}
// Id, UserId, OrderId?

// Id, CartId, ItemId, Qty, Price

// 
