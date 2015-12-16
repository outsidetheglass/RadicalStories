using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RadicalStories.Models
{
    public class Radical
    {
        public int Id { get; set; }
        public string Pinyin { get; set; }
        [Required(ErrorMessage = "Must insert a chinese character.")]
        [MinLength(1, ErrorMessage ="Must have at least one.")]
        [MaxLength(20, ErrorMessage ="Never will see this.")]
        public string Symbol { get; set; }
        public string SymbolVariations { get; set; }
        public string Meaning { get; set; }
        public int StrokesNum { get; set; }

    }
}