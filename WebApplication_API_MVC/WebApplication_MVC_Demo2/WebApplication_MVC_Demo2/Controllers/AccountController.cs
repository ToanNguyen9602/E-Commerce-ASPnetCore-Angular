using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using WebApplication_MVC_Demo2.Models;
using WebApplication_MVC_Demo2.Service;

namespace WebApplication_MVC_Demo2.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private AccountService AccountService;
        private IWebHostEnvironment webHostEnvironment;

        public AccountController(AccountService _AccountService, IWebHostEnvironment _webHostEnvironment)
        {
            this.AccountService = _AccountService;
            this.webHostEnvironment = _webHostEnvironment;
        }



        [Produces("application/json")]
        [HttpGet("findbyid/{id}")]
        public IActionResult FindId(int id)
        {
            try
            {
                return Ok(AccountService.FindId(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("create")]
        public IActionResult Create([FromBody] Account account)
        {
            try
            {
                account.Password = BCrypt.Net.BCrypt.HashPassword(account.Password);
                return Ok(new
                {
                    status = AccountService.Create(account)
                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("login/{username}&{password}")]
        public IActionResult FindByCreated(string username, string password)
        {
            try
            {
                return Ok(new
                {
                    status = AccountService.Login(username, password)
                });
            }
            catch
            {
                return BadRequest();
            }
        }
        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPut("update")]
        public IActionResult Update([FromBody] Account account)
        {
            try
            {
                account.Password = BCrypt.Net.BCrypt.HashPassword(account.Password);
                return Ok(new
                {
                    status = AccountService.Update(account)
                });
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
