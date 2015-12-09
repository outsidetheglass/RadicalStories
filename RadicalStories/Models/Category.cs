using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RadicalStories.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Radical { get; set; }

        public ICollection<Character> Characters { get; set; }
    }

}