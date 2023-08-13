using WebApplication_MVC_Demo2.Models;

namespace WebApplication_MVC_Demo2.Service
{
    public interface ProductService
    {
        public List<Product> findAll();
        public dynamic findAll2();
        public dynamic findByID(int id);
        public dynamic findByName(string name);
        public dynamic findByCategory(int categoryid);
        public dynamic findByPrice(float min, float max);
        public dynamic findByCreated(DateTime start, DateTime end);
        public bool checkHave(string name);
        //public dynamic count(int month, int year);
        //public dynamic total(int month, int year);
        public bool Create(Product product); //thêm dữ liệu vô
        public bool Delete(int id);//xóa dữ liệu bằng ID
        public bool Update(Product product); //Sửa dữ liệu
    }
}
