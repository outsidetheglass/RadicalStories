using RadicalStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace RadicalStories.API {
    public class CharactersController : ApiController {
        private IRepository _repo;
        public CharactersController(IRepository repo) {
            this._repo = repo;
        }
        public IEnumerable<Character> Get() {
            var characters = _repo.ListCharacters();
            return characters;
        }

        public IHttpActionResult Get(int id) {
            var match = _repo.Find(id);
            if (match == null) {
                return NotFound();
            }
            return Ok(match);
        }

        // POST: api/Characters
        [Authorize]
        public IHttpActionResult Post(Character character) {
            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            var user = this.User as ClaimsPrincipal;
            if (user.HasClaim("CanAddCharacters", "true")) {
                _repo.SaveChar(character);
                return Created("", character);
            }
            else { return Unauthorized(); }
        }
        
        // DELETE: api/Characters/5
        public IHttpActionResult Delete(int id) {
            _repo.Delete(id);
            return Ok();
        }
        //[HttpGet]
        //[Route("api/categories/search/{searchString}")]
        //public IHttpActionResult Search(string searchString)
        //{
        //    if (string.IsNullOrWhiteSpace(searchString)) {
        //        return BadRequest("Empty search, oh nooo!");
        //    }
        //    var results = _repo.Characters.Where(p => p.Symbol.Contains(searchString));
        //    return Ok(results);
        //}
    }
}
