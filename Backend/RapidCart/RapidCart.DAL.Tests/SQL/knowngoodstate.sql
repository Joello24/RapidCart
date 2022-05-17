
CREATE PROCEDURE [TestSetKnownGoodState]
AS
BEGIN
    delete from OrderItem where 1=1;

    delete from [Order] where 1=1;
    DBCC CHECKIDENT([Order], RESEED, 0);
    delete from [Order] where 1=1;

    delete from [Address] where 1=1;
    DBCC CHECKIDENT([Address], RESEED, 0);
    delete from [Address] where 1=1;

    DBCC CHECKIDENT (Item, RESEED, 0);
    delete from Item where 1=1;
    DBCC CHECKIDENT (Item, RESEED, 0);

    delete from [User] where 1=1;
    DBCC CHECKIDENT ([User], RESEED, 0);
    delete from [User] where 1=1;

    delete from [Permissions] where 1=1;
    DBCC CHECKIDENT ([Permissions], RESEED, 0);


    delete from Category where 1=1;
    DBCC CHECKIDENT(Category, RESEED, 0);
    delete from Category where 1=1;



    insert into Category ( [Name]) values ( 'Beverages');
    insert into Category ( [Name]) values ( 'Bakery');
    insert into Category ( [Name]) values ( 'Canned/Jarred Goods');
    insert into Category ( [Name]) values ( 'Dairy');
    insert into Category ( [Name]) values ( 'Dry/Baking Goods');
    insert into Category ( [Name]) values ( 'Frozen Foods');
    insert into Category ( [Name]) values ( 'Meat');
    insert into Category ( [Name]) values ( 'Produce');
    insert into Category ( [Name]) values ( 'Cleaners');
    insert into Category ( [Name]) values ( 'Paper Goods');
    insert into Category ( [Name]) values ( 'Personal Care');
    insert into Category ( [Name]) values ( 'Other');

    insert into [Permissions] (PermissionName)
    values ('Customer'), ('Admin');

    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Gus', 'Jost', 'sa@123.com', 'e5857b335afdf35ca81a110bc81f38682f8a89892cc597f5398dfef82d42b513', '332-411-2147',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Trude', 'Bes', 'tbes1@sogou.com', 'okz1XfRsv3', '815-234-2158',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Lew', 'Dedmam', 'ldedmam2@yale.edu', 'JdO5Vu4e', '286-724-9302',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Fawne', 'MacGinney', 'fmacginney3@ox.ac.uk', 'kUkvzLfV', '547-731-6904',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Benito', 'Cavan', 'bcavan4@bizjournals.com', 'DRXO5Pf', '295-277-3367',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Shepperd', 'Font', 'sfont5@state.gov', 'jJcb14FzD7M', '278-950-5474',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Garrot', 'Dumigan', 'gdumigan6@redcross.org', '1gzgAxbM8Woa', '342-855-3265',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Auria', 'Hogbourne', 'ahogbourne7@sitemeter.com', '0kxpjx04Chxv', '858-276-4006',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Shandee', 'McQuillen', 'smcquillen8@scientificamerican.com', 'svED2o3ujNUr', '459-863-0224',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Enid', 'Caisley', 'ecaisley9@engadget.com', 'tEmR3Do2j', '302-808-2509',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Rodina', 'Ivery', 'riverya@bing.com', 'lJ2ITaB75IU', '300-475-8336',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Gloriane', 'Fetters', 'gfettersb@marketwatch.com', 's1OTmegL', '208-807-7087',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Gloriana', 'Nowakowska', 'gnowakowskac@acquirethisname.com', 'rIr474X', '211-450-5946',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Ari', 'Vawton', 'avawtond@ted.com', 'siUFdNoGzo', '997-861-0986',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Katerine', 'Baitson', 'kbaitsone@ftc.gov', 'ooSucRSjIj6', '292-228-2748',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Brandice', 'Espinosa', 'bespinosaf@usda.gov', '72o3ou', '451-254-2350',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Rebbecca', 'Gives', 'rgivesg@themeforest.net', 'jTerUEkK', '813-503-3034',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Shurlock', 'Hame', 'shameh@princeton.edu', 'tkvAujjV', '841-933-0454',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Jeth', 'Nutbeem', 'jnutbeemi@jigsy.com', 'FSDd5RM83SdY', '268-312-1218',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Rozamond', 'Canada', 'rcanadaj@macromedia.com', '6u3gmH1gO', '167-934-6702',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Bertram', 'Slamaker', 'bslamakerk@etsy.com', 'S8R6F2x', '132-456-3145',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Cesar', 'Haycroft', 'chaycroftl@blinklist.com', '3Pkqn23z8r', '788-945-7628',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Muffin', 'Starbuck', 'mstarbuckm@163.com', 'Mgi4gvx', '831-404-4955',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Tara', 'Egginson', 'tegginsonn@macromedia.com', 'h7SctcXi', '962-408-6748',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Brett', 'Giovanazzi', 'bgiovanazzio@forbes.com', 'gVjDpdi8NswH', '794-593-4275',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Gusty', 'Goldfinch', 'ggoldfinchp@flickr.com', 'eGbFQ7rw2', '647-954-3973',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Mario', 'Timbridge', 'mtimbridgeq@oracle.com', 'iC4OgnD4O', '619-633-5692',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Leupold', 'Cawthra', 'lcawthrar@weather.com', 'RNGr763g6F7M', '997-876-4161',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Grazia', 'Duffy', 'gduffys@wufoo.com', 'C8Tt7ijh5um', '515-376-3823',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Maia', 'Waterstone', 'mwaterstonet@so-net.ne.jp', '3cAJy2kvpnzW', '918-873-9733',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Catharina', 'MacFadzan', 'cmacfadzanu@1und1.de', 'jEwQDk', '182-432-7094',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Salvador', 'Blumire', 'sblumirev@pen.io', 'hNi5ONXwcj', '230-174-3231',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Hermina', 'Windrus', 'hwindrusw@webeden.co.uk', 'QNzYoD', '709-192-1811',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Francesco', 'Wheldon', 'fwheldonx@icq.com', 'te5w7v', '893-413-3020',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Josie', 'Ethridge', 'jethridgey@photobucket.com', 'LlvdOiZf', '250-591-5214',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Leopold', 'Mavin', 'lmavinz@hp.com', 'zmTlQmzuG', '972-820-6018',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Francisca', 'Garnsey', 'fgarnsey10@ycombinator.com', 'wLwlgn', '192-335-4457',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Cate', 'Enrico', 'cenrico11@blog.com', 'yx6qjYglN', '157-792-0369',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Filbert', 'Woolfenden', 'fwoolfenden12@uiuc.edu', 'wtvKRFUcZ', '298-187-1961',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Shanta', 'Craddock', 'scraddock13@1688.com', '7AiyycQZ', '407-948-0327',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Dianemarie', 'Steels', 'dsteels14@themeforest.net', 'i7SFH8q8fc', '776-227-1015',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Libbie', 'Bielfeldt', 'lbielfeldt15@nhs.uk', '19lJljSzqs4', '155-759-1883',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Adan', 'Murtimer', 'amurtimer16@msn.com', 'suFPhrs3a1wT', '566-377-9270',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Casey', 'Garret', 'cgarret17@bloglovin.com', 'GN3JZH', '410-404-7650',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Harbert', 'Dacke', 'hdacke18@cam.ac.uk', 'qWLftwCSeaqs', '132-824-6613',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Billie', 'Kennham', 'bkennham19@mit.edu', 'G1JF7746FvHs', '411-994-7592',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Cordy', 'Toynbee', 'ctoynbee1a@ft.com', 'bIhTLHF5VaU', '462-945-2108',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Peggy', 'Goddman', 'pgoddman1b@cam.ac.uk', 'bP0teaGAbiV', '768-985-1768',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Faun', 'Peery', 'fpeery1c@youtube.com', 'ZIAqtq', '269-742-1847',2);
    insert into [User] ( FirstName, LastName, Email, [Password], Phone,PermissionId) values ( 'Steffen', 'Yezafovich', 'syezafovich1d@youku.com', 'EX9KfAZCiv2', '506-202-7256',2);

    set IDENTITY_INSERT [Address] on;
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (1, 1, '448 Sloan Circle', 'Minneapolis', 'MN', 55102, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (2, 2, '747 Vermont Point', 'Minneapolis', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (3, 3, '9 Vernon Park', 'St. Paul', 'MN', 55406, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (4, 4, '4557 Karstens Park', 'St. Paul', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (5, 5, '3 Washington Place', 'Minneapolis', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (6, 6, '75428 Del Mar Crossing', 'Minneapolis', 'MN', 55408, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (7, 7, '6634 Center Hill', 'Minneapolis', 'MN', 55101, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (8, 8, '233 Shoshone Road', 'Minneapolis', 'MN', 55406, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (9, 9, '61659 Algoma Lane', 'St. Paul', 'MN', 55101, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (10, 10, '74514 Anhalt Pass', 'St. Paul', 'MN', 55406, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (11, 11, '5293 Claremont Court', 'Minneapolis', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (12, 12, '9162 Duke Way', 'Minneapolis', 'MN', 55102, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (13, 13, '51925 Elgar Terrace', 'Minneapolis', 'MN', 55408, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (14, 14, '021 Jenna Point', 'Minneapolis', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (15, 15, '79034 Village Green Court', 'Minneapolis', 'MN', 55104, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (16, 16, '40 Colorado Way', 'Minneapolis', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (17, 17, '43 Barby Junction', 'St. Paul', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (18, 18, '2795 Fuller Way', 'St. Paul', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (19, 19, '5059 Debra Plaza', 'St. Paul', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (20, 20, '2468 Bunting Hill', 'Minneapolis', 'MN', 55408, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (21, 21, '9967 Cardinal Pass', 'Minneapolis', 'MN', 55408, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (22, 22, '8462 Thierer Center', 'St. Paul', 'MN', 55102, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (23, 23, '84 Basil Avenue', 'Minneapolis', 'MN', 55104, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (24, 24, '3 Sycamore Circle', 'St. Paul', 'MN', 55103, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (25, 25, '3 Autumn Leaf Hill', 'St. Paul', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (26, 26, '5 Forest Run Court', 'Minneapolis', 'MN', 55102, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (27, 27, '2835 Lakewood Junction', 'St. Paul', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (28, 28, '80 Summit Circle', 'St. Paul', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (29, 29, '4 Ronald Regan Avenue', 'Minneapolis', 'MN', 55406, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (30, 30, '0 Golden Leaf Lane', 'St. Paul', 'MN', 55104, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (31, 31, '62762 Summerview Junction', 'St. Paul', 'MN', 55104, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (32, 32, '3 Erie Point', 'Minneapolis', 'MN', 55102, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (33, 33, '733 Reinke Trail', 'Minneapolis', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (34, 34, '56467 Melvin Place', 'Minneapolis', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (35, 35, '8387 Northwestern Hill', 'St. Paul', 'MN', 55406, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (36, 36, '2162 Truax Circle', 'St. Paul', 'MN', 55406, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (37, 37, '00 Sheridan Point', 'St. Paul', 'MN', 55408, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (38, 38, '6025 Nelson Park', 'St. Paul', 'MN', 55104, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (39, 39, '64 Kenwood Pass', 'Minneapolis', 'MN', 55102, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (40, 40, '77 Hauk Road', 'Minneapolis', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (41, 41, '44928 Thackeray Parkway', 'Minneapolis', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (42, 42, '9 Buhler Park', 'Minneapolis', 'MN', 55408, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (43, 43, '71 Muir Terrace', 'St. Paul', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (44, 44, '4 Division Court', 'Minneapolis', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (45, 45, '7 Summit Circle', 'St. Paul', 'MN', 55103, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (46, 46, '62 Moland Park', 'St. Paul', 'MN', 55401, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (47, 47, '6 Birchwood Plaza', 'St. Paul', 'MN', 55406, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (48, 48, '8 Darwin Point', 'Minneapolis', 'MN', 55104, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (49, 49, '6 Division Avenue', 'Minneapolis', 'MN', 55404, 'US');
    insert into [Address] (AddressId, UserId, Street, City, [State], PostalCode, CountryCode) values (50, 50, '115 Merry Terrace', 'St. Paul', 'MN', 55404, 'US');
    set IDENTITY_INSERT [Address] off;

    insert into [Order] (UserId, TotalCost, DateCreated) values (1, 10, '3/8/2022');
    insert into [Order] (UserId, TotalCost, DateCreated) values (2, 92, '3/11/2022');
    insert into [Order] (UserId, TotalCost, DateCreated) values (3, 68, '9/19/2021');

insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (7, 'Beef Rib Eye', 'nunc donec', 51.34, 66, 'https://i5.walmartimages.com/asr/6feb2cc9-9593-4553-bf8c-adc55f988c51.0134d480fbddd0f38c7f3d6a8e5d1e0e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (2, 'Choclate Cake', 'nam congue', 96.42, 49, 'https://i5.walmartimages.com/asr/be194135-1cf4-4312-bf84-a4fbebc2d54c.a3cc48afcea7f5c8d2963782fb1f6ba3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (8, 'Lettuce', 'libero non mattis pulvinar nulla', 19.88, 52, 'https://i5.walmartimages.com/asr/6989391c-7793-442e-b937-f2d0562fef2b.7979218cc798806f9f713c77e3da4939.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (8, 'Eggplant', 'volutpat', 77.61, 24, 'https://i5.walmartimages.com/asr/e706b04b-9afb-4354-bd1b-bc26f8cd45de_1.525d3bc6496281f33269bee52da35e5e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (5, 'Olive Oil', 'ut nunc vestibulum', 20.02, 54, 'https://i5.walmartimages.com/asr/1ea11082-4a99-4b59-b9bb-3a47667d4955.552ed33df67a086276b1d7103e046812.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (4, 'American Cheese', 'massa quis augue luctus tincidunt', 13.75, 72, 'https://i5.walmartimages.com/asr/276b7041-f3e4-4b83-9577-1f9576ad6048.cec3c141a1913f0f370ccd386d10f761.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (7, 'Cod Fillet', 'nullam sit amet', 74.84, 98, 'https://i5.walmartimages.com/asr/9319c356-89b4-4bfd-b112-0ea0b2f93850.4778e421289014d64a77b2d1d0a0aa30.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (1, 'Carbonated Water - Blackberry', 'ac tellus semper', 90.42, 32, 'https://i5.walmartimages.com/asr/b2a8a5cd-6b8c-4dc1-8cc5-73106e8375a3.698ba08e9fc04d955fd6fcfe1b54ed96.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (1, 'Canada Dry', 'nec sem duis aliquam', 2.28, 94, 'https://i5.walmartimages.com/asr/598f8c56-f7df-48f6-b257-1fc86079b1e1.5221fa7979c9d1d84106e9673bc10786.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');
insert into Item (CategoryId, [Name], [Description], Price, Inventory, [Path]) values (1, 'Wine', 'et eros vestibulum ac', 31.79, 7, 'https://i5.walmartimages.com/asr/c04a2956-daec-412c-a417-2dd6d33ba061.234ea7fc7218935b97214ec4b29f62e9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF');

    insert into OrderItem (OrderId, ItemId, Quantity, ItemPrice, TotalCost) values (3, 1, 1, 5, 5);
    insert into OrderItem (OrderId, ItemId, Quantity, ItemPrice, TotalCost) values (2, 2, 4, 30, 120);
    insert into OrderItem (OrderId, ItemId, Quantity, ItemPrice, TotalCost) values (1, 3, 3, 21, 63);
    insert into OrderItem (OrderId, ItemId, Quantity, ItemPrice, TotalCost) values (1, 4, 4, 35, 140);
    insert into OrderItem (OrderId, ItemId, Quantity, ItemPrice, TotalCost) values (3, 5, 3, 43, 129);

END;
go

