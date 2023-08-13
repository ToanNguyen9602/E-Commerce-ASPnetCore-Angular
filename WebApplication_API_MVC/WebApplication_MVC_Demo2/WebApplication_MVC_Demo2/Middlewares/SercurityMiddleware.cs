using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Threading.Tasks;

namespace WebApplication_MVC_Demo2.Middlewares
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class SercurityMiddleware
    {
        private readonly RequestDelegate _next;

        public SercurityMiddleware(RequestDelegate next)
        {
           
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            bool status = true;
            if (status)
            {
                await _next(httpContext);
            }
            else
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return;
            }
            
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<SercurityMiddleware>();
        }
    }
}
