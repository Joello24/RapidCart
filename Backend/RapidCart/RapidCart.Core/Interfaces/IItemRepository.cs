﻿using RapidCart.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RapidCart.Core.Interfaces
{
    public interface IItemRepository
    {
        Response<Item> Insert(Item item);
        Response Update(Item item);
        Response Delete(int itemId);
        Response<Item> Get(int itemId);

    }
}