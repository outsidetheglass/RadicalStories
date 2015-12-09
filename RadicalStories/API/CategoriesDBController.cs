using RadicalStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RadicalStories.API
{
    public class CategoriesDBController : ApiController
    {
        private IRepository _repo;

        public CategoriesDBController(IRepository repo)
        {
            this._repo = repo;
        }


        public IEnumerable<Character> Get()
        {
            var movies = _repo.ListCharacters();
            return movies;
        }
        public IHttpActionResult Post(Character character)
        {
            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            _repo.SaveChar(character);

            return Created("", character);
        }

        public IHttpActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var character = _repo.Find(id);
            if (character == null) {
                return NotFound();
            }
            return Ok(character);
        }
    }
}
