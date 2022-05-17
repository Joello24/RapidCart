using Microsoft.EntityFrameworkCore;
using RapidCart.Core;
using RapidCart.Core.Entities;

namespace RapidCart.DAL.DBConnection
{
    public class AppDbContext : DbContext
    {
        public DbSet<Address> Address { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Item> Item { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<Permissions> Permissions { get; set; }
        public DbSet<User> User { get; set; }
<<<<<<< HEAD
        public DbSet<Cart> Cart { get; set; }
=======
        public DbSet<CartItem> CartItem { get; set; }
>>>>>>> bf66c05152286e61b46cc16fc8d4f04a8109a15b

        public AppDbContext() : base()
        {
        }
    
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderItem>()
                .HasKey(OI => new { OI.OrderId, OI.ItemId });
            modelBuilder.Entity<CartItem>()
                .HasKey(CI => new { CI.CartId, CI.ItemId });

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        
        }
    }
}