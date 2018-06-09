using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IUserDetailsService
    {
        Dictionary<int, JRaw> GetUserDetailsByUserIds(int[] userIds);
    }
}
