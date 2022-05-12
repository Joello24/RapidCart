using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using RapidCart.Core;

namespace RapidCart.DAL.Repositories
{
    public class ReportRepository : IReportRepository
    {
        private readonly string _connectionString;

        public ReportRepository(DBFactory dbFactory)
        {
            _connectionString = dbFactory.GetConnectionString();
        }


        public Response<List<Item>> SortItems(string SearchTerm)
        {
            Response<List<Item>> response = new Response<List<Item>>();
            List<Item> items = new List<Item>();
            using (var connection = new SqlConnection(_connectionString))
            {
                try
                {
                    var sql = ($"SearchItemsByName ");
                    var command = new SqlCommand(sql, connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = sql;
                    var param = command.Parameters.Add("@SearchTerm", SqlDbType.VarChar);
                    param.Value = SearchTerm;
                    connection.Open();
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Item item = new Item();
                            item.ItemId = int.Parse(reader["ItemId"].ToString());
                            item.CategoryId = int.Parse(reader["CategoryId"].ToString());
                            item.Name = reader["Name"].ToString();
                            item.Description = reader["Description"].ToString();
                            item.Price = decimal.Parse(reader["Price"].ToString());
                            item.Inventory = int.Parse(reader["Inventory"].ToString());
                            
                            items.Add(item);
                        }
                    }

                    if (items.Count == 0)
                    {
                        response.Success = true;
                        response.Message = "No items found";
                    }
                }
                catch (Exception ex)
                {
                    response.Success = false;
                    response.Message = ex.Message;
                    return response;
                }
            }
            response.Success = true;
            response.Data = items;
            return response;
        }
    }
}