using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RadicalStories.Models {
    public class Category {
        public int Id { get; set; }
        public IList<Radical> Radicals { get; set; }
    }
}