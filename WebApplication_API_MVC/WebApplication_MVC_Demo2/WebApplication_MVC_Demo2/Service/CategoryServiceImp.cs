using Microsoft.AspNetCore.Http.HttpResults;
using WebApplication_MVC_Demo2.Models;

namespace WebApplication_MVC_Demo2.Service
{
    public class CategoryServiceImp : CategoryService
    {
        private DatabaseContext db;

        public CategoryServiceImp(DatabaseContext _db)
        {
            db = _db;
        }
        public dynamic findall()
        {
            return db.Categories.Select(c => new
            {
                id = c.Id,
                name = c.Name
            }).ToList();
        } 
       
    }
}
