﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Requests
{
    public class MultiplexedUserDetailGetRequest
    {
        public int[] Ids { get; set; }
    }
}
