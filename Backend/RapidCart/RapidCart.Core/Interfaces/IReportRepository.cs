using System.Collections.Generic;

namespace RapidCart.Core
{
    public interface IReportRepository
    {
        Response<List<Item>> SortItems(string searchTerm);
        Response<List<Order>> GetOrderReport(int userId);
        public Response<List<Item>> SortByCategory(int categoryId);
    }
}