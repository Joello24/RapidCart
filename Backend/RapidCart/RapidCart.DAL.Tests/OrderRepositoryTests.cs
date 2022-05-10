using System;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using RapidCart.Core;
using RapidCart.DAL.Repositories;

namespace RapidCart.DAL.Tests
{
    public class OrderRepositoryTests
    {
        OrderRespository db;
        DBFactory factory;

        [SetUp
        ]
        public void Setup()
        {
            DBFactory factory = new DBFactory();
            db = new OrderRespository(factory);
            factory.GetDbContext().Database.ExecuteSqlRaw("TestSetKnownGoodState");
        }

        // Response<Order> Insert(Order order);
        // Response Update(Order order);
        // Response Delete(int orderId);
        // Response<Order> Get(int orderId);
        // Response<List<Order>> GetByUser(int userId);

        [Test]
        public void GetGoodCategoryTest()
        {
            var actual = db.Get(1);
            Assert.AreEqual(10, actual.Data.TotalCost);
            Assert.IsTrue(actual.Success);
        }

        [Test]
        public void GetBadCategoryTest()
        {
            var actual = db.Get(500);
            Assert.IsFalse(actual.Success);
        }

        [Test]
        public void InsertGoodCategoryTest()
        {
            var actual = db.Insert(new Order()
            {
                UserId = 1,
                TotalCost = 10,
                DateCreated = DateTime.Now,

            });
            Assert.IsTrue(actual.Success);
            Assert.AreEqual(4, actual.Data.OrderId);
        }

        [Test]
        public void InsertBadCategoryTest()
        {
            var actual = db.Insert(new Order()
            {
                UserId = 1000,
                TotalCost = 10,
                DateCreated = DateTime.Now,
            });
            Assert.IsFalse(actual.Success);
        }

        [Test]
        public void UpdateGoodCategoryTest()
        {
            var actual = db.Update(new Order()
            {
                OrderId = 1,
                UserId = 1,
                TotalCost = 50,
                DateCreated = DateTime.Now,
            });
            Assert.IsTrue(actual.Success);
        }

        [Test]
        public void UpdateBadCategoryTest()
        {
            var actual = db.Update(new Order()
            {
                OrderId = 500,
                UserId = 1,
                TotalCost = 50,
                DateCreated = DateTime.Now,
            });
            Assert.IsFalse(actual.Success);
        }

        [Test]
        public void DeleteGoodCategoryTest()
        {
            var actual = db.Delete(1);
            Assert.IsTrue(actual.Success);
        }

        [Test]
        public void DeleteBadCategoryTest()
        {
            var actual = db.Delete(500);
            Assert.IsFalse(actual.Success);
        }

        [Test]
        public void GetByUserGoodCategoryTest()
        {
            var actual = db.GetByUser(1);
            Assert.IsTrue(actual.Data.Count == 1);
            Assert.IsTrue(actual.Success);
        }

        [Test]
        public void GetByUserBadCategoryTest()
        {
            var actual = db.GetByUser(500);
            Assert.IsFalse(actual.Success);
        }
    }
}