using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using WebApplication_MVC_Demo2.Models;
using WebApplication_MVC_Demo2.Service;

namespace WebApplication_MVC_Demo2.Controllers
{
    [Route("api/category")]
    public class CategoryController : Controller
    {
        private CategoryService categoryService;
        private IWebHostEnvironment webHostEnvironment;

        public CategoryController(CategoryService _categoryService, IWebHostEnvironment _webHostEnvironment)
        {
            this.categoryService = _categoryService;
            this.webHostEnvironment = _webHostEnvironment;
        }



        [Produces("application/json")]
        [HttpGet("findall")]
        public IActionResult Findall()
        {
            try
            {
                return Ok(categoryService.findall());
            }
            catch
            {
                return BadRequest();
            }
        }
        
        
    }
}
