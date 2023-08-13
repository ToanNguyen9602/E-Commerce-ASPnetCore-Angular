using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using System.Threading.Tasks;

namespace WebApplication_MVC_Demo2.Middlewares
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class Log3Middleware
    {
        private readonly RequestDelegate _next;

        public Log3Middleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task Invoke(HttpContext httpContext)
        {
            Debug.WriteLine("Url:" + httpContext.Request.Path);
            return _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class Log3MiddlewareExtensions
    {
        public static IApplicationBuilder UseLog1Middleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<Log3Middleware>();
        }
    }
}
