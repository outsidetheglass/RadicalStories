using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RadicalStories.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Pinyin { get; set; }
        [Required(ErrorMessage = "Must insert a chinese character.")]
        [MinLength(1, ErrorMessage = "Must have at least one character.")]
        [MaxLength(4, ErrorMessage = "Can't have more than four characters.")]
        public string Symbol { get; set; }
        public string Radicals { get; set; }
        public string Formation { get; set; }
        public string Meaning { get; set; }
    }
}