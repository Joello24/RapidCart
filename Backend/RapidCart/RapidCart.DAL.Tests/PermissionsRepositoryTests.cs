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
    public class PermissionsRepositoryTests
    {
        PermissionsRepository db;
        DBFactory factory;

        [SetUp]
        public void Setup()
        {
            DBFactory factory = new DBFactory();
            db = new PermissionsRepository(factory);
            factory.GetDbContext().Database.ExecuteSqlRaw("TestSetKnownGoodState");
        }

        private Permissions _customer = new Permissions
        {
            PermissionId = 1,
            PermissionName = "Customer"
        };
        private Permissions _admin = new Permissions
        {
            PermissionId = 2,
            PermissionName = "Admin"
        };
        private Permissions _dumby = new Permissions
        {
            PermissionId = 3,
            PermissionName = "Dumby"
        };

        [TestCase(1)]
        [TestCase(2)]

        public void GetById_ValidPermissionId_Pass(int permissionId)
        {
            var actual = db.Get(permissionId);

            Assert.IsTrue(actual.Success);
            Assert.AreEqual(actual.Data.PermissionId, _admin.PermissionId);
            Assert.IsNull(actual.Message);
        }

        [Test]
        public void GetById_InvalidId_Fail()
        {
            var actual = db.Get(_dumby.PermissionId);

            Assert.IsFalse(actual.Success);
            Assert.IsNotEmpty(actual.Message);
        }

        [Test]
        public void GetAll_Pass()
        {
            var numOfPermissions = 2;
            var actual = db.GetAll();

            Assert.IsTrue(actual.Success);
            Assert.AreEqual(numOfPermissions,actual.Data.Count);
            Assert.IsNull(actual.Message);
        }
    }
}
