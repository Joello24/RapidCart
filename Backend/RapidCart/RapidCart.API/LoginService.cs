using RapidCart.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Web
{

    public static class LoginService
    {
        public static Response<string> GetPasswordHash(string pass)
        {
            Response<string> response = new Response<string>() { Success = true };
            try
            {
                using (SHA256 sha256Hash = SHA256.Create())
                {
                    response.Data = GetHash(sha256Hash, pass);
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }
            return response;
        }
            
        private static string GetHash(HashAlgorithm hashAlgorithm, string input)
        {
            byte[] data = hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes(input));
            var sBuilder = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            return sBuilder.ToString();
        }
    }
}
