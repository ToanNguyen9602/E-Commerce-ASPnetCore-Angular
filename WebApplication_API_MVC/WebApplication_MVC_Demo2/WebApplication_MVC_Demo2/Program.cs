using Microsoft.EntityFrameworkCore;
using WebApplication_MVC_Demo2.Converters;
using WebApplication_MVC_Demo2.Middlewares;
using WebApplication_MVC_Demo2.Models;
using WebApplication_MVC_Demo2.Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

builder.Services.AddControllers().AddJsonOptions(option =>
{
    option.JsonSerializerOptions.Converters.Add(new DateTimeConverter());
});

var connecionString = builder.Configuration["ConnectionStrings:DefaultConnection"];
builder.Services.AddDbContext<DatabaseContext>(option => option.UseLazyLoadingProxies().UseSqlServer(connecionString));

builder.Services.AddScoped<ProductService, ProductServiceImp>();
builder.Services.AddScoped<AccountService, AccountServiceImp>();
builder.Services.AddScoped<CategoryService, CategoryServiceImp>();


var app = builder.Build();

app.UseCors(builder => builder
                .AllowAnyHeader()
                .AllowAnyMethod()
                .SetIsOriginAllowed((host) => true)
                .AllowCredentials()
            );
/*
app.UseMiddleware<BasicAuthMiddleware>();
app.UseMiddleware<Log1Middleware>();
app.UseMiddleware<SercurityMiddleware>();
app.UseMiddleware<Log2Middleware>();
app.UseMiddleware<Log3Middleware>();
*/
app.UseStaticFiles();

app.MapControllers();

app.Run();
