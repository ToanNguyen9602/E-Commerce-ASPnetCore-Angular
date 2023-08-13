using WebApplication_MVC_Demo2.Models;

namespace WebApplication_MVC_Demo2.Service
{
    public interface AccountService
    {
        public bool Create(Account Account);
        public dynamic FindId(int id);
        public bool Login(string username, string password);
        public bool Update(Account account);
    }
}
