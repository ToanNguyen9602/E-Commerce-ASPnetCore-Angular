﻿using System;
using System.Collections.Generic;

namespace WebApplication_MVC_Demo2.Models;

public partial class Role
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
}
