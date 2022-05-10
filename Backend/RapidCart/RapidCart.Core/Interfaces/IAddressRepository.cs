using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core.Interfaces
{
    public interface IAddressRepository
    {
        Reponse<Address> Insert(Address address);
        Response Update(Address address);
        Response Delete(int addressId);
        Response<Address> Get(int addressId);

    }
}


