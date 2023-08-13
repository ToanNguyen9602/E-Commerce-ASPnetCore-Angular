using Microsoft.AspNetCore.Http.HttpResults;
using WebApplication_MVC_Demo2.Models;

namespace WebApplication_MVC_Demo2.Service
{
    public class AccountServiceImp : AccountService
    {
        private DatabaseContext db;

        public AccountServiceImp(DatabaseContext _db)
        {
            db = _db;
        }

        public dynamic FindId(int id)
        {
            return db.Accounts.Where(p => p.Id == id).Select(p => new
            {
                Id = p.Id,
                Username = p.Username,
                Password = p.Password,
                FullName = p.FullName,
                Email = p.Email,
                Status = p.Status,
            }).FirstOrDefault();
        }
        public bool Create(Account account)
        {
            try
            {
                db.Accounts.Add(account);
                return db.SaveChanges() > 0;
            }
            catch
            {
                return false;
            }
        }
        public bool Login(string username, string password)
        {
            var account = db.Accounts.SingleOrDefault(a => a.Username == username && a.Status);
            if (account != null)
            {
                return BCrypt.Net.BCrypt.Verify(password, account.Password);
            }
            return false;
        }
        public bool Update(Account account)
        {
            try
            {
                
                    db.Entry(account).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    return db.SaveChanges() > 0;
            }
            catch
            {
                return false;
            }
        }
    }
}
