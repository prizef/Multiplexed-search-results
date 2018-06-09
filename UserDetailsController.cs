using Newtonsoft.Json.Linq;
using Models.Requests;
using Models.Responses;
using Services;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web.Controllers.Api
{
    public class UserDetailsController : ApiController
    {
        readonly IUserDetailsService userDetailsService;

        public UserDetailsController(IUserDetailsService userDetailsService)
        {
            this.userDetailsService = userDetailsService;
        }

        [Route("api/users/multiplexed-details"), HttpPost]
        public HttpResponseMessage MultiplexedGet(MultiplexedUserDetailGetRequest req)
        {
            var result = userDetailsService.GetUserDetailsByUserIds(req.Ids);

            var itemResponse = new ItemResponse<Dictionary<int, JRaw>>();
            itemResponse.Item = result;

            return Request.CreateResponse(HttpStatusCode.OK, itemResponse);
        }
    }
}
