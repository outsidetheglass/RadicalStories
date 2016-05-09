using RadicalStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GenRep;

namespace RadicalStories.Services {
    public class CharacterServices : ICharacterServices {

        private IGenericRepository _repo;
        public CharacterServices(IGenericRepository repo) {
            this._repo = repo;
        }
        public IList<Radical> RadicalSearch(int id) {
            var results = _repo.Query<Radical>().Where( p => p.Id == id).Include(p=>p.Lines).ToList();
            return results;
        }


        public IList<Radical> ListRadicals() {
            return _repo.Query<Radical>().ToList();
        }

        //var categories = (from m in _repo.Categories select m).ToList();
        //    return categories;
        //    Character.Where(p => p.Id == id).FirstOrDefault();

        public void SaveRad(Radical radToSave) {
            if (radToSave.Id == 0) {
                _repo.Add<Radical>(radToSave);
                _repo.SaveChanges();
            }
            else {
                var original = this.Find(radToSave.Id);
                original.Symbol = radToSave.Symbol;
                original.Pinyin = radToSave.Pinyin;
                original.Meaning = radToSave.Meaning;
                original.StrokesNum = radToSave.StrokesNum;
                _repo.SaveChanges();
            }
        }

        public Radical Find(int id) {
            return _repo.Find<Radical>(id);
        }
        public void Delete(int id) {
            var radical = this.Find(id);
            _repo.Delete<Radical>(radical);
            _repo.SaveChanges();
        }
    
}
}