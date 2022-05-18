using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RapidCart.Core;
using RapidCart.Core.Enums;
using RapidCart.DAL;
using RapidCart.DAL.Repositories;

namespace RapidCart.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var MyAllowedSpecificOrigins = "_myAllowedSpecificOrigins";
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowedSpecificOrigins,
                                    policy =>
                                    {
                                        policy.AllowAnyHeader();
                                        policy.WithOrigins("*", "http://localhost:3000");
                                        policy.AllowAnyMethod();
                                    });
            });

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = "http://localhost:3000",
                        ValidAudience = "http://localhost:3000",
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("KeyForSignInSecret@1234"))
                    };
                    services.AddMvc().SetCompatibilityVersion(Microsoft.AspNetCore.Mvc.CompatibilityVersion.Version_3_0);
                });
            
            var fac = new DBFactory(AppMode.Live);
            services.AddControllers();
            services.AddTransient<ICategoryRepository>(r => new CategoryRepository(fac));
            services.AddTransient<IOrderRepository>(r => new OrderRespository(fac));
            services.AddTransient<IUserRepository>(r => new UserRepository(fac));
            services.AddTransient<IOrderItemRepository>(r => new OrderItemRepository(fac));
            services.AddTransient<IItemRepository>(r => new ItemRepository(fac));
            services.AddTransient<IReportRepository>(r => new ReportRepository(fac));
            services.AddTransient<ICartRepository>(r => new CartRepository(fac));
            services.AddTransient<ICartItemRepository>(r => new CartItemRepository(fac, new CartRepository(fac)));
            //services.AddTransient<IAddressRepository>(r => new AddressRepository(fac));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            var MyAllowedSpecificOrigins = "_myAllowedSpecificOrigins";
            app.UseCors(MyAllowedSpecificOrigins);

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
