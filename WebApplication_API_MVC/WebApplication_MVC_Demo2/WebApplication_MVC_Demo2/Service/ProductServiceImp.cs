using Microsoft.AspNetCore.Http.HttpResults;
using WebApplication_MVC_Demo2.Models;

namespace WebApplication_MVC_Demo2.Service
{
    public class ProductServiceImp : ProductService
    {
        private DatabaseContext db;
        private IConfiguration configuration;

        public ProductServiceImp(DatabaseContext _db, IConfiguration _configuration)
        {
            db = _db;
            configuration = _configuration;
        }

        public List<Product> findAll() {
            return db.Products.ToList();
        }
        public dynamic findAll2()
        {
            return db.Products.Select(p => new
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity,
                Description = p.Description,
                Status = p.Status,
                Photo = configuration["Base_Url"] + "images/" + p.Photo,
                Created = p.Created,
                CategoryId = p.CategoryId,
                Featured = p.Featured,

            }).ToList();
        }

        public dynamic findByID(int id) 
        {
            return db.Products.Where(p => p.Id == id).Select(p => new
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity,
                Description = p.Description,
                Status = p.Status,
                Photo = configuration["Base_Url"] + "images/" + p.Photo,
                Created = p.Created,
                CategoryId = p.CategoryId,
                Featured = p.Featured,

            }).FirstOrDefault();
        }

        //Liệt kê các sản phẩm có tên chứa 1 từ khóa
        public dynamic findByName(string name)
        {
            return db.Products.Where(p => p.Name.Contains(name)).Select(p => new
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity,
                Description = p.Description,
                Status = p.Status,
                Photo = configuration["Base_Url"] + "images/" + p.Photo,
                Created = p.Created,
                CategoryId = p.CategoryId,
                Featured = p.Featured,

            }).ToList();
        }
        public dynamic findByCategory(int categoryid)
        {
            return db.Products.Where(p => p.CategoryId == categoryid).Select(p => new
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity,
                Description = p.Description,
                Status = p.Status,
                Photo = configuration["Base_Url"] + "images/" + p.Photo,
                Created = p.Created,
                CategoryId = p.CategoryId,
                Featured = p.Featured,

            }).ToList();
        }

        //Liệt kê các sản phẩm có giá trị nằm trong khoảng từ min đến max
        public dynamic findByPrice(float min, float max)
        {
            return db.Products.Where(p => p.Price >= min && p.Price <= max).Select(p => new
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity,
                Description = p.Description,
                Status = p.Status,
                Photo = configuration["Base_Url"] + "images/" + p.Photo,
                Created = p.Created,
                CategoryId = p.CategoryId,
                Featured = p.Featured,

            }).ToList();
        }

        //Liệt kê các sản phẩm được sản xuất trong một khoảng thời gian
        public dynamic findByCreated(DateTime start, DateTime end)
        {
            return db.Products.Where(p => p.Created >= start && p.Created <= end).Select(p => new
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity,
                Description = p.Description,
                Status = p.Status,
                Photo = configuration["Base_Url"] + "images/" + p.Photo,
                Created = p.Created,
                CategoryId = p.CategoryId,
                Featured = p.Featured,

            }).ToList();
        }

        //Kiểm tra tên sản phẩm có tồn tại trong danh sách hay không?
        public bool checkHave(string name)
        {
            //db.Products.Count(p => p.Name == name) > 0
            if (db.Products.Where(p => p.Name == name).ToList().Count > 0) {
                return true;
            }
            else return false;
            
        }

        //kiểm tra có bao nhiêu sản phẩm trong tháng và năm được nhập sau đó tính tổng số tiền của chúng
        

        public bool Create(Product product)
        {
            try
            {
                db.Products.Add(product);
                return db.SaveChanges() > 0;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                db.Products.Remove(db.Products.Find(id));
                return db.SaveChanges() > 0;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(Product product)
        {
            try
            {
                db.Entry(product).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                return db.SaveChanges() > 0;
            }
            catch
            {
                return false;
            }
        }
    }
}
