using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using RapidCart.Core;
using RapidCart.DAL.Repositories;

namespace RapidCart.DAL.Tests
{
    public class CategoryRepositoryTests
    {
        CategoryRepository db;
        DBFactory factory;

        [SetUp]
        public void Setup()
        {
            DBFactory factory = new DBFactory();
            db = new CategoryRepository(factory);
            factory.GetDbContext().Database.ExecuteSqlRaw("TestSetKnownGoodState");
        }

        [Test]
        public void GetGoodCategoryTest()
        {
            var actual = db.Get(1);
            Assert.AreEqual("Beverages" , actual.Data.Name);
            Assert.IsTrue(actual.Success);
        }
        [Test]
        public void GetBadCategoryTest()
        {
            var actual = db.Get(500);
            Assert.IsFalse(actual.Success);
        }
        [Test]
        public void GetAllCategoriesTest()
        {
            var actual = db.GetAll();
            Assert.IsTrue(actual.Success);
        }
        
    }
}
