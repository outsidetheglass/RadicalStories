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


        public IEnumerable<Radical> Get()
        {
            var categories = _repo.ListRadicals();
            return categories;
        }
        public IHttpActionResult Post(Radical radical)
        {
            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            _repo.SaveRad(radical);

            return Created("", radical);
        }

        public IHttpActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var radical = _repo.Find(id);
            if (radical == null) {
                return NotFound();
            }
            return Ok(radical);
        }
    }
}
