using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using RapidCart.Core;
using RapidCart.DAL.Repositories;

namespace RapidCart.DAL.Tests
{
    public class ItemRepositoryTests
    {
        ItemRepository db;
        DBFactory factory;

        private Item ItemWithoutId = new Item
        {
            CategoryId = 12,
            Name = "Yogurt - Plain",
            Description = "felis sed lacus morbi",
            Price = 83,
            Inventory = 84
        };
        private Item ItemWithId = new Item
        {
            ItemId = 1,
            CategoryId = 12,
            Name = "Yogurt - Plain",
            Description = "felis sed lacus morbi",
            Price = 83,
            Inventory = 84
        };

        [SetUp]
        public void Setup()
        {
            DBFactory factory = new DBFactory();
            db = new ItemRepository(factory);
            factory.GetDbContext().Database.ExecuteSqlRaw("TestSetKnownGoodState");
        }


        [Test]
        public void InsertGoodItemTest()
        {
            var actual = db.Insert(ItemWithoutId);
            Assert.AreEqual(ItemWithoutId, actual.Data);
            Assert.IsTrue(actual.Success);
        }
        [Test]
        public void InsertBadItemTest()
        {
            var actual = db.Insert(ItemWithId);
            Assert.AreEqual(ItemWithId, actual.Data);
            Assert.IsFalse(actual.Success);
        }
        [Test]
        public void UpdateGoodItemTest()
        {
            ItemWithId.Name = "Testing";
            var actual = db.Update(ItemWithId);
            Assert.IsTrue(actual.Success);
        }
        [Test]
        public void UpdateBadItemTest()
        {
            var actual = db.Update(ItemWithoutId);
            Assert.IsFalse(actual.Success);
        }

        [Test]
        public void GetGoodItemTest()
        {
            var actual = db.Get(1);
            Assert.AreEqual("Yogurt - Plain", actual.Data.Name);
        }
        [Test]
        public void GetBadItemTest()
        {
            var actual = db.Get(1000);
            Assert.IsFalse(actual.Success);
        }

        [Test]
        public void DeleteGoodItemTest()
        {
            var actual = db.Delete(42);
            Assert.IsTrue(actual.Success);
        }

        [Test]
        public void DeleteBadItemTest()
        {
            var actual = db.Delete(1000);
            Assert.IsFalse(actual.Success);
        }
    }
}
