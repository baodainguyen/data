using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoAdo.Utility
{
    public class ConnectionString
    {
        private static string cName = "Data Source=PC-056;Initial Catalog=StudentManagement;Integrated Security=True;";
        public static string CName
        {
            get => cName;
        }
    }
}
