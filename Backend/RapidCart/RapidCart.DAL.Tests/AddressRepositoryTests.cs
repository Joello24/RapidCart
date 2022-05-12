using System;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using RapidCart.Core;
using RapidCart.DAL.Repositories;

namespace RapidCart.DAL.Tests
{
    public class AddressRepositoryTests
    {
        AddressRepository db;
        DBFactory factory;

        [SetUp]
        public void Setup()
        {
            DBFactory factory = new DBFactory();
            db = new AddressRepository(factory);
            factory.GetDbContext().Database.ExecuteSqlRaw("TestSetKnownGoodState");
        }

        [Test]
        public void GetOneAddress()
        {
            Assert.AreEqual(1, db.Get(1).Data.AddressId);
        }

        [Test]
        public void TestAddNewAddress()
        {
            Address expected = new Address
            {
                AddressId = 2,
                UserId = 2,
                Street = "747 Vermont Point",
                City = "Minneapolis",
                PostalCode = "55404",
                CountryCode = "US"
            };

            db.Insert(expected);
            expected.AddressId = 2;

            Assert.AreEqual(expected.AddressId, db.Get(2).Data.AddressId);
            Assert.AreEqual("Minneapolis", db.Get(2).Data.AddressId);

        }

        [Test
        public void TestUpdateAddress()
        {
            Address address = db.Get(2).Data;
            address.City = "Minneapolis";
            db.Update(address);

            Assert.AreEqual(address.AddressId, db.Get(2).Data.AddressId);
            Assert.AreEqual("Minneapolis", db.Get(2).Data.City);
        }

        [Test]
        public void TestGetAddressByAddressId()
        {
            Assert.AreEqual(1, db.AddressId(1).Data.Count);
            Assert.AreEqual(1, db.AddressId(2).Data.Count);
            Assert.AreEqual(1, db.AddressId(3).Data.Count);
            Assert.AreEqual(1, db.AddressId(4).Data.Count);
            Assert.AreEqual(1, db.AddressId(5).Data.Count);
        }

        [Test]
        public void TestDeleteAddressId()
        {
            db.Delete(1);
            Assert.AreEqual(0, db.addressId(1).Data.Count);
            Assert.AreEqual(null, db.Get(1).Data);


        }
    }
}
