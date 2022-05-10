﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core
{
    internal interface IPermissionsRepository
    {
        Response<Permissions> Get(int Permissions);

        Response<List<Permissions>> GetAll();
    }
}