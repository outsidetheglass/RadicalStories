using RadicalStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RadicalStories.API
{
    public class CharactersController : ApiController
    {
        private static List<Character> _character = new List<Character>
        {
            new Character { Id=1, Pinyin = "yī", Symbol = "一", Radicals = "一", Formation = "Ideograph - representing heaven (天), horizon (旦), or a bar", },
            new Character {Id = 2, Pinyin = "mù", Symbol = "木", Radicals =  "木", Formation = "Pictograph - Picture of a tree with branches above ground and roots in the bottom" },
            new Character {Id = 3, Pinyin = "lín", Symbol = "林", Radicals = "木木", Formation = "Pictograph - Two pictures of a tree with branches above ground and roots in the bottom." }
        };
        // GET: api/Characters
        public IEnumerable<Character> Get()
        {
            return _character;
        }

        // GET: api/Characters/5
        public IHttpActionResult Get(int id)
        {
            var match = _character.Where(p => p.Id == id).FirstOrDefault();
            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        // POST: api/Characters
        public IHttpActionResult Post(Character character)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _character.Add(character);
            return Created("api/character/" + character.Id, character);
        }
        // DELETE: api/Characters/5
        public void Delete(int id)
        {
        }
        [HttpGet]
        [Route("api/categories/search/{searchString}")]
        public IHttpActionResult Search(string searchString)
        {
            if (string.IsNullOrWhiteSpace(searchString))
            {
                return BadRequest("Empty search, oh nooo!");
            }
            var results = _character.Where(p => p.Symbol.Contains(searchString));
            return Ok(results);
        }
    }
}
