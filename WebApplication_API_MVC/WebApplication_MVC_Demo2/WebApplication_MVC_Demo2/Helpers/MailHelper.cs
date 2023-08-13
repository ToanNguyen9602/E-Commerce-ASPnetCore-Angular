using System.Diagnostics;
using System.Net;
using System.Net.Mail;

namespace WebApplication_MVC_Demo2.Helpers
{
    public class MailHelper
    {
        private IConfiguration configuration;
        public MailHelper(IConfiguration _configuration)
        {
            configuration = _configuration;
        }
        public bool Send(string from, string to, string subject, string content)
        {
            try
            {
                var host = configuration["Gmail:Host"];
                var port = int.Parse(configuration["Gmail:Port"]);
                var username = configuration["Gmail:Username"];
                var password = configuration["Gmail:Password"];
                var enable = bool.Parse(configuration["Gmail:SMTP:starttls:enable"]);
                var smtpClient = new SmtpClient
                {
                    Host = host,
                    Port = port,
                    EnableSsl = enable,
                    Credentials = new NetworkCredential(username, password)
                };
                var mailMassage = new MailMessage(from, to);
                mailMassage.Subject = subject;
                mailMassage.Body = content;
                mailMassage.IsBodyHtml = true;
                smtpClient.Send(mailMassage);
                return true;

            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }

        }
    }
}
