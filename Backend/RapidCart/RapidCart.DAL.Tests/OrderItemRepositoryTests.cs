using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using RapidCart.Core;
using RapidCart.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.DAL.Tests
{
    public class OrderItemRepositoryTests
    {
        OrderItemRepository db;
        DBFactory factory;

        [SetUp]
        public void Setup()
        {
            DBFactory factory = new DBFactory();
            db = new OrderItemRepository(factory);
            factory.GetDbContext().Database.ExecuteSqlRaw("TestSetKnownGoodState");
        }

        [Test]
        public void AddOrderItemTest()
        {
            var orderItem = new OrderItem
            {
                OrderId = 1,
                ItemId = 1,
                ItemPrice = 12,
                Quantity = 3,
                TotalCost = 36
            };

            var actual = db.Insert(orderItem);

            Assert.IsTrue(actual.Success);
            Assert.IsNull(actual.Message);
        }
        [Test]
        public void AddOrderItemTest_MissingOrderId_Fail()
        {
            var orderItem = new OrderItem
            {
                ItemId = 1,
                ItemPrice = 12,
                Quantity = 3,
                TotalCost = 36
            };

            var actual = db.Insert(orderItem);

            Assert.IsFalse(actual.Success);
            Assert.IsNotEmpty(actual.Message);
        }

        [Test]
        public void GetOrderItemTest()
        {
            var actual = db.Get(3,42);

            Assert.IsTrue(actual.Success);
            Assert.IsNull(actual.Message);
        }
        [Test]
        public void GetOrderItemTest_Fail()
        {
            var actual = db.Get(3,1);

            Assert.IsFalse(actual.Success);
            Assert.IsNotEmpty(actual.Message);
        }

        [Test]
        public void EditOrderItemTest()
        {
            var orderItem = new OrderItem
            {
                OrderId = 1,
                ItemId = 1,
                ItemPrice = 14,
                Quantity = 3,
                TotalCost = 42
            };

            var actual = db.Insert(orderItem);

            Assert.IsTrue(actual.Success);
            Assert.IsNull(actual.Message);
        }
        [Test]
        public void EditOrderItemTest_Fail()
        {
            var orderItem = new OrderItem
            {
                OrderId = 4,
                ItemId = 1,
                ItemPrice = 12,
                Quantity = 3,
                TotalCost = 36
            };

            var actual = db.Insert(orderItem);

            Assert.IsFalse(actual.Success);
            Assert.IsNotEmpty(actual.Message);
        }

        [Test]
        public void DeleteOrderItemTest()
        {
            var actual = db.Delete(3,42);

            Assert.IsTrue(actual.Success);
            Assert.IsNotEmpty(actual.Message);
        }
        [Test]
        public void DeleteOrderItemTest_Fail()
        {
            var actual = db.Delete(3,1);

            Assert.IsFalse(actual.Success);
            Assert.IsNotEmpty(actual.Message);
        }

        [Test]
        public void GetAllOrderItem()
        {
            var expectedCount = 2;
            var actual = db.GetAll(3);

            Assert.IsTrue(actual.Success);
            Assert.IsNull(actual.Message);
            Assert.AreEqual(expectedCount, actual.Data.Count);
        }
    }
}
