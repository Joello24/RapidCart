
alter database RapidCartTest set single_user with rollback immediate
USE master;
GO

drop database if exists RapidCartTest;
go
CREATE DATABASE RapidCartTest;
GO

USE RapidCartTest;
GO

CREATE TABLE [Permissions](
                            PermissionId int primary key identity(1,1),
                            PermissionName varchar(50) not null
)
go
CREATE TABLE [User] (
                        UserId int primary key identity(1,1),
                        FirstName nvarchar(50) not null,
                        LastName nvarchar(50) not null,
                        Email nvarchar(50) not null,
                        [Password] nvarchar(250) not null,
                        Phone nvarchar(20) not null,
                        PermissionId int not null foreign key references [Permissions](PermissionId)
)
GO

CREATE TABLE [Address] (
                           AddressId int primary key identity(1,1),
                           UserId int not null foreign key references [User](UserId),
                           Street nvarchar(50) not null,
                           [State] nvarchar(50) not null,
                           City nvarchar(50) not null,
                           PostalCode nvarchar(15) not null,
                           CountryCode varchar(5) not null
)
GO

CREATE TABLE [Order] (
                         OrderId int primary key identity(1,1),
                         UserId int not null foreign key references [User](UserId),
                         TotalCost decimal,
                         DateCreated datetime2 not null,
)
GO

CREATE TABLE Category(
                         CategoryId int primary key identity (1,1),
                         [Name] nvarchar(50),
)
GO
CREATE TABLE Item (
                      ItemId int primary key identity(1,1),
                      CategoryId int not null foreign key references Category(CategoryId),
                      [Name] nvarchar(100),
                      [Description] nvarchar(150),
                      Price decimal,
                      Inventory int,
                      [Path] NVARCHAR(MAX)
)
GO

CREATE TABLE OrderItem(
                          OrderId int not null foreign key references [Order](OrderId),
                          ItemId int not null foreign key references Item(ItemId),
                          Quantity int not null,
                          ItemPrice decimal,
                          TotalCost decimal
)

GO