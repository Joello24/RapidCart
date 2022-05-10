using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using RapidCart.Core;
using RapidCart.DAL.Repositories;

namespace RapidCart.DAL.Tests
{
    public class Tests
    {
        UserRepository db;
        DBFactory factory;

        private User UserWithoutId = new User
        {
            FirstName = "Gus",
            LastName = "Jost",
            Email = "gjost0@trellian.com",
            Password= "hFMNCbBPRMzm",
            Phone = "132-456-3145",
            PermissionId = 2
        };
        private User UserWithId = new User
        {
            UserId = 1,
            FirstName = "Gus",
            LastName = "Jost",
            Email = "gjost0@trellian.com",
            Password= "hFMNCbBPRMzm",
            Phone = "132-456-3145",
            PermissionId = 2
        };

        [SetUp]
        public void Setup()
        {
            DBFactory factory = new DBFactory();
            db = new UserRepository(factory);
            factory.GetDbContext().Database.ExecuteSqlRaw("TestSetKnownGoodState");
        }
        //Response<User> Insert(User user);
        //Response Update(User user);
        //Response Delete(int userId);
        //Response<User> Get(int userId);

        [Test]
        public void InsertGoodUserTest()
        {
            var actual = db.Insert(UserWithoutId);
            Assert.AreEqual(UserWithoutId, actual.Data);
            Assert.IsTrue(actual.Success);
        }
        [Test]
        public void InsertBadUserTest()
        {
            var actual = db.Insert(UserWithId);
            Assert.AreEqual(UserWithId, actual.Data);
            Assert.IsFalse(actual.Success);
        }
        [Test]
        public void UpdateGoodUserTest()
        {
            UserWithId.FirstName= "Pam";
            var actual = db.Update(UserWithId);
            Assert.IsTrue(actual.Success);
        }
        [Test]
        public void UpdateBadUserTest()
        {
            var actual = db.Update(UserWithoutId);
            Assert.IsFalse(actual.Success);
        }
        [Test]
        public void DeleteGoodUserTest()
        {
            var actual = db.Delete(1);
            Assert.IsTrue(actual.Success);
        }
        [Test]
        public void DeleteBadUserTest()
        {
            var actual = db.Delete(500);
            Assert.IsFalse(actual.Success);
        }
        [Test]
        public void GetGoodUserTest()
        {
            var actual = db.Get(1);
            Assert.AreEqual("Gus", actual.Data.FirstName);
        }
        [Test]
        public void GetBadUserTest()
        {
            var actual = db.Get(1000);
            Assert.IsFalse(actual.Success);
        }
    }
}
