using Microsoft.AspNetCore.Mvc;

namespace WebApplication_MVC_Demo2.Controllers
{
    [Route("api/demo")]
    public class DemoController : Controller
    {
        [Produces("application/json")]
        [HttpGet("demo1")]
        public IActionResult Demo1()
        {
            try
            {
                return Ok(new
                {
                    msg = "hello"
                });
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("demo2")]
        public IActionResult Demo2()
        {
            try
            {
                return Ok(new
                {
                    msg = "hello"
                });
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
