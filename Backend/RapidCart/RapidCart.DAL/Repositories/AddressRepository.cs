using System;
using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using RapidCart.Core;

namespace RapidCart.DAL.Repositories
{
    public class AddressRepository : IAddressRepository
    {
        private readonly DBFactory _dbFactory;
        public AddressRepository(DBFactory dbFactory)
        {
            _dbFactory = dbFactory;
        }
        public Response<Address> Insert(AddressRepository address)
        {
            var response = new Response<Address>();

            try
            {
                using (var db = _dbFactory.GetDbContext())
                {
                    db.Address.Add(address);
                    db.SaveChanges();
                    response.Success = true;
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        public Response Update(Address address)
        {
            var response = new Response<Address>();

            try
            {
                using (var db = _dbFactory.GetDbContext())
                {
                    db.address.Update(address);
                    db.SaveChanges();
                    response.Success = true;
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }

            return response;
        }

        public Response Delete(int addressId)
        {
            var response = new Response<Address>();

            try
            {
                using (var db = _dbFactory.GetDbContext())
                {
                    var address = new Address() { AddressId = addressId };
                    db.Address.Attach(address);
                    db.Address.Delete(addressId);
                    db.SaveChanges();
                    response.Success = true;
                }
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
            }
            return response;
        }

        public Response<Address> Get(int addressId)
        {
            var response = new Response<Address>();
            {
                try
                {
                    using (var db = _dbFactory.GetDbContext())
                    {
                        var address = db.Address.Find(addressId);
                        if (address != null)
                        {
                            response.Success = true;
                            response.Data = address;
                            response.Message = ("{addressId} was found");
                        }
                        else
                        {
                            response.Success = false;
                            response.Message = ("Address Id: {addressId} was not found.");
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                return response;
            }

        }
    }
}
