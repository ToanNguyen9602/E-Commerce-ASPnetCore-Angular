using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using Newtonsoft.Json.Converters;
using System.Globalization;
using WebApplication_MVC_Demo2.Converters;
using WebApplication_MVC_Demo2.Helpers;
using WebApplication_MVC_Demo2.Models;
using WebApplication_MVC_Demo2.Service;

namespace WebApplication_MVC_Demo2.Controllers
{
    [Route("api/product")]
    public class ProductController : Controller
    {
        private ProductService productService;
        private IWebHostEnvironment webHostEnvironment;

        public ProductController(ProductService _productService, IWebHostEnvironment _webHostEnvironment)
        {
            this.productService = _productService;
            this.webHostEnvironment = _webHostEnvironment;
        }


        [Produces("application/json")]
        [HttpGet("findall")]
        public IActionResult FindAll()
        {
            try
            {
                return Ok(productService.findAll());
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findall2")]
        public IActionResult FindAll2()
        {
            try
            {
                return Ok(productService.findAll2());
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findbyid/{id}")]
        public IActionResult FindByID(int id)
        {
            try
            {
                return Ok(productService.findByID(id));
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findbycategory/{categoryid}")]
        public IActionResult FindByCategoryId(int categoryid)
        {
            try
            {
               if(categoryid == -1)
                {
                    return Ok(productService.findAll2());
                }
                else
                {
                    return Ok(productService.findByCategory(categoryid));
                }
            }
            catch
            {
                return BadRequest();
            }
        }
        [Produces("application/json")]
        [HttpGet("findbyname/{name}")]
        public IActionResult FindByName(string name)
        {
            try
            {
                return Ok(productService.findByName(name));
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findbyprice/{min}/{max}")]
        public IActionResult FindByPrice(float min, float max)
        {
            try
            {
                return Ok(productService.findByPrice(min,max));
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("findbycreated/{start}&{end}")]
        public IActionResult FindByCreated(string start, string end)
        {
            try
            {
                var ST = DateTime.ParseExact(start, "dd-MM-yyyy", CultureInfo.InvariantCulture);
                var EN = DateTime.ParseExact(end, "dd-MM-yyyy", CultureInfo.InvariantCulture);
                return Ok(productService.findByCreated(ST,EN));
            }
            catch
            {
                return BadRequest();
            }
        }

        [Produces("application/json")]
        [HttpGet("checkhave/{name}")]
        public IActionResult CheckHave(string name)
        {
            try
            {
                if (productService.checkHave(name))
                {
                    return Ok(new
                    {
                        msg = "Co san pham nay"
                    });
                }else
                {
                    return Ok(new
                    {
                        msg = "Khong co san pham nay"
                    });
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("application/json")]
        [Produces("application/json")]
        [HttpPost("create")]
        public IActionResult Create([FromBody] Product product)
        {
            try
            {

                return Ok(new
                {
                    status = productService.Create(product)
                });
            }
            catch
            {
                return BadRequest();
            }
        }

        
        [Produces("application/json")]
        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {

                return Ok(new
                {
                    status = productService.Delete(id)
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
        public IActionResult Update([FromBody] Product product)
        {
            try
            {

                return Ok(new
                {
                    status = productService.Update(product)
                });
            }
            catch
            {
                return BadRequest();
            }
        }

        [Consumes("multipart/form-data")]
        [Produces("application/json")]
        [HttpPost("create2")]
        public IActionResult Create2(IFormFile file, string strProduct)
        {
            try
            {
                Debug.WriteLine("File Info");
                Debug.WriteLine("name: " + file.FileName);
                Debug.WriteLine("type: " + file.ContentType);
                Debug.WriteLine("size: " + file.Length);
                var fileName = FileHelper.generateFileName(file.FileName);
                var path = Path.Combine(webHostEnvironment.WebRootPath, "images", fileName);
                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                Debug.WriteLine("--------------------------");
                Debug.WriteLine(strProduct);
                var product = JsonConvert.DeserializeObject<Product>(strProduct, new IsoDateTimeConverter
                {
                    DateTimeFormat = "dd/MM/yyyy"
                });
                product.Photo = fileName;

                return Ok(new
                {
                    status = productService.Create(product)
                }); ;
            }
            catch
            {
                return BadRequest();
            }
        }

    }
}
