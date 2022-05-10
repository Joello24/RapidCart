
-- INSERTS FOR TESTING CLIENT SIDE
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
delete from Permissions where 1=1;
DBCC CHECKIDENT (Permissions, RESEED, 0);

delete from Category where 1=1;
DBCC CHECKIDENT(Category, RESEED, 0);
delete from Category where 1=1;

delete from [User] where 1=1;
DBCC CHECKIDENT ([User], RESEED, 0);
delete from [User] where 1=1;


insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Gus', 'Jost', 'gjost0@trellian.com', 'hFMNCbBPRMzm', '332-411-2147');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Trude', 'Bes', 'tbes1@sogou.com', 'okz1XfRsv3', '815-234-2158');
insert into User (FirstName, LastName, Email, Password, Phone) values ( 'Lew', 'Dedmam', 'ldedmam2@yale.edu', 'JdO5Vu4e', '286-724-9302');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Fawne', 'MacGinney', 'fmacginney3@ox.ac.uk', 'kUkvzLfV', '547-731-6904');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Benito', 'Cavan', 'bcavan4@bizjournals.com', 'DRXO5Pf', '295-277-3367');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Shepperd', 'Font', 'sfont5@state.gov', 'jJcb14FzD7M', '278-950-5474');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Garrot', 'Dumigan', 'gdumigan6@redcross.org', '1gzgAxbM8Woa', '342-855-3265');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Auria', 'Hogbourne', 'ahogbourne7@sitemeter.com', '0kxpjx04Chxv', '858-276-4006');
insert into User (FirstName, LastName, Email, Password, Phone) values ( 'Shandee', 'McQuillen', 'smcquillen8@scientificamerican.com', 'svED2o3ujNUr', '459-863-0224');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Enid', 'Caisley', 'ecaisley9@engadget.com', 'tEmR3Do2j', '302-808-2509');
insert into User (FirstName, LastName, Email, Password, Phone) values ( 'Rodina', 'Ivery', 'riverya@bing.com', 'lJ2ITaB75IU', '300-475-8336');
insert into User (FirstName, LastName, Email, Password, Phone) values ( 'Gloriane', 'Fetters', 'gfettersb@marketwatch.com', 's1OTmegL', '208-807-7087');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Gloriana', 'Nowakowska', 'gnowakowskac@acquirethisname.com', 'rIr474X', '211-450-5946');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Ari', 'Vawton', 'avawtond@ted.com', 'siUFdNoGzo', '997-861-0986');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Katerine', 'Baitson', 'kbaitsone@ftc.gov', 'ooSucRSjIj6', '292-228-2748');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Brandice', 'Espinosa', 'bespinosaf@usda.gov', '72o3ou', '451-254-2350');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Rebbecca', 'Gives', 'rgivesg@themeforest.net', 'jTerUEkK', '813-503-3034');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Shurlock', 'Hame', 'shameh@princeton.edu', 'tkvAujjV', '841-933-0454');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Jeth', 'Nutbeem', 'jnutbeemi@jigsy.com', 'FSDd5RM83SdY', '268-312-1218');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Rozamond', 'Canada', 'rcanadaj@macromedia.com', '6u3gmH1gO', '167-934-6702');
insert into User (FirstName, LastName, Email, Password, Phone) values ( 'Bertram', 'Slamaker', 'bslamakerk@etsy.com', 'S8R6F2x', '132-456-3145');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Cesar', 'Haycroft', 'chaycroftl@blinklist.com', '3Pkqn23z8r', '788-945-7628');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Muffin', 'Starbuck', 'mstarbuckm@163.com', 'Mgi4gvx', '831-404-4955');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Tara', 'Egginson', 'tegginsonn@macromedia.com', 'h7SctcXi', '962-408-6748');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Brett', 'Giovanazzi', 'bgiovanazzio@forbes.com', 'gVjDpdi8NswH', '794-593-4275');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Gusty', 'Goldfinch', 'ggoldfinchp@flickr.com', 'eGbFQ7rw2', '647-954-3973');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Mario', 'Timbridge', 'mtimbridgeq@oracle.com', 'iC4OgnD4O', '619-633-5692');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Leupold', 'Cawthra', 'lcawthrar@weather.com', 'RNGr763g6F7M', '997-876-4161');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Grazia', 'Duffy', 'gduffys@wufoo.com', 'C8Tt7ijh5um', '515-376-3823');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Maia', 'Waterstone', 'mwaterstonet@so-net.ne.jp', '3cAJy2kvpnzW', '918-873-9733');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Catharina', 'MacFadzan', 'cmacfadzanu@1und1.de', 'jEwQDk', '182-432-7094');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Salvador', 'Blumire', 'sblumirev@pen.io', 'hNi5ONXwcj', '230-174-3231');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Hermina', 'Windrus', 'hwindrusw@webeden.co.uk', 'QNzYoD', '709-192-1811');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Francesco', 'Wheldon', 'fwheldonx@icq.com', 'te5w7v', '893-413-3020');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Josie', 'Ethridge', 'jethridgey@photobucket.com', 'LlvdOiZf', '250-591-5214');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Leopold', 'Mavin', 'lmavinz@hp.com', 'zmTlQmzuG', '972-820-6018');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Francisca', 'Garnsey', 'fgarnsey10@ycombinator.com', 'wLwlgn', '192-335-4457');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Cate', 'Enrico', 'cenrico11@blog.com', 'yx6qjYglN', '157-792-0369');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Filbert', 'Woolfenden', 'fwoolfenden12@uiuc.edu', 'wtvKRFUcZ', '298-187-1961');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Shanta', 'Craddock', 'scraddock13@1688.com', '7AiyycQZ', '407-948-0327');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Dianemarie', 'Steels', 'dsteels14@themeforest.net', 'i7SFH8q8fc', '776-227-1015');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Libbie', 'Bielfeldt', 'lbielfeldt15@nhs.uk', '19lJljSzqs4', '155-759-1883');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Adan', 'Murtimer', 'amurtimer16@msn.com', 'suFPhrs3a1wT', '566-377-9270');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Casey', 'Garret', 'cgarret17@bloglovin.com', 'GN3JZH', '410-404-7650');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Harbert', 'Dacke', 'hdacke18@cam.ac.uk', 'qWLftwCSeaqs', '132-824-6613');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Billie', 'Kennham', 'bkennham19@mit.edu', 'G1JF7746FvHs', '411-994-7592');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Cordy', 'Toynbee', 'ctoynbee1a@ft.com', 'bIhTLHF5VaU', '462-945-2108');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Peggy', 'Goddman', 'pgoddman1b@cam.ac.uk', 'bP0teaGAbiV', '768-985-1768');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Faun', 'Peery', 'fpeery1c@youtube.com', 'ZIAqtq', '269-742-1847');
insert into User ( FirstName, LastName, Email, Password, Phone) values ( 'Steffen', 'Yezafovich', 'syezafovich1d@youku.com', 'EX9KfAZCiv2', '506-202-7256');



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


insert into Order (UserId, TotalCost, DateCreated) values (1, 10, '3/8/2022');
insert into Order (UserId, TotalCost, DateCreated) values (2, 92, '3/11/2022');
insert into Order (UserId, TotalCost, DateCreated) values (3, 68, '9/19/2021');




insert into Permissions (PermissionName)
values ('Customer'), ('Admin');


go

