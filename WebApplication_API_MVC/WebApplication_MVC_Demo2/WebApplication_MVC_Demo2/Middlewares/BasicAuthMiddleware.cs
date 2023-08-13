using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.Diagnostics;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using WebApplication_MVC_Demo2.Service;

namespace WebApplication_MVC_Demo2.Middlewares
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class BasicAuthMiddleware
    {
        private AccountService accountService;
        private readonly RequestDelegate _next;

        public BasicAuthMiddleware(RequestDelegate next)
        {
            _next = next;
          
        }

        public async Task Invoke(HttpContext httpContext, AccountService accountService)
        {
            var authorization = httpContext.Request.Headers.Authorization;
            if (!authorization.IsNullOrEmpty())
            {
                authorization = authorization.ToString().Replace("Basic ", "");
                Debug.WriteLine(authorization);
                var usernamePassword = Encoding.GetEncoding("UTF-8").GetString(Convert.FromBase64String(authorization));
                Debug.WriteLine(usernamePassword);
                var result = usernamePassword.Split(new char[] { ':' });
                var username = result[0];
                var password = result[1];
                if (accountService.Login(username, password))
                {
                    await _next(httpContext);
                }
                else
                {
                    httpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                    return;
                }
            } else
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                return;
            }
            
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class BasicAuthMiddlewareExtensions
    {
        public static IApplicationBuilder UseBasicAuthMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<BasicAuthMiddleware>();
        }
    }
}
