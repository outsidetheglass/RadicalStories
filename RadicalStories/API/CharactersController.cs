using RadicalStories.Models;
using RadicalStories.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace RadicalStories.API {
    public class CharactersController : ApiController {
        private ICharacterServices _service;
        public CharactersController(ICharacterServices service) {
            this._service = service;
        }
        public IEnumerable<Radical> Get() {
            var radicals = _service.ListRadicals();
            return radicals;
        }

        public IHttpActionResult Get(int id) {
            var match = _service.Find(id);
            if (match == null) {
                return NotFound();
            }
            return Ok(match);
        }

        // POST: api/Characters
        [Authorize]
        public IHttpActionResult Post(Radical radical) {
            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            var user = this.User as ClaimsPrincipal;
            if (user.HasClaim("CanAddRadicals", "true")) {
                _service.SaveRad(radical);
                return Created("", radical);
            }
            else { return Unauthorized(); }
        }
        
        // DELETE: api/Characters/5
        public IHttpActionResult Delete(int id) {
            _service.Delete(id);
            return Ok();
        }
        //[HttpGet]
        //[Route("api/characters/search/:id")]
        //public IList<Radical> Find(int id) {
        //    //if (string.IsNullOrWhiteSpace(searchString)) {
        //      //  return BadRequest("Empty search, oh nooo!");
        //    //}
        //    var searchResults = _service.RadicalSearch(id);
        //    return searchResults;
        //}
    }
}
