using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.DAL.Repositories
{
    public class PermissionsRepository : IPermissionsRepository
    {
        public DBFactory DbFac { get; set; }

        public PermissionsRepository(DBFactory DbFac)
        {
            this.DbFac = DbFac;
        }

        public Response<Permissions> Get(int permissionId)
        {
            var response = new Response<Permissions>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.Permissions.Find(permissionId);
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if(response.Data == null)
            {
                response.Message = $"No permissions found with ID: {permissionId}";
                response.Success = false;
            }
            return response;
        }

        public Response<List<Permissions>> GetAll()
        {
            var response = new Response<List<Permissions>>() { Success = true };
            try
            {
                using (var db = DbFac.GetDbContext())
                {
                    response.Data = db.Permissions.ToList();
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            if (response.Data == null)
            {
                response.Message = $"There are currently no existing permissions";
                response.Success = false;
            }
            return response;
        }
    }
}
