using System.Collections.Generic;

namespace RapidCart.Core
{
    public interface IReportRepository
    {
        Response<List<Item>> SortItems(string searchTerm);
    }
}