using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Data.Providers;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class UserDetailsService : IUserDetailsService
    {
        private IDataProvider dataProvider;

        public UserDetailsService(IDataProvider dataProvider)
        {
            this.dataProvider = dataProvider;
        }

        public Dictionary<int, JRaw> GetUserDetailsByUserIds(int[] userIds)
        {
            Dictionary<int, JRaw> result = new Dictionary<int, JRaw>();
            dataProvider.ExecuteCmd(
                "UserDetails_GetByUserId",
                inputParamMapper: parameters =>
                {
                    parameters.AddWithValue("@ids", JsonConvert.SerializeObject(userIds));
                },
                singleRecordMapper: (reader, resultSetIndex) =>
                {
                    var id = (int)reader["id"];
                    var details = new JRaw((string)reader["Details"]);
                    result.Add(id, details);
                });

            return result;
        }
    }
}
