using RadicalStories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace RadicalStories.Models
{
    public class EFRepository : IRepository
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<Radical> ListRadicals()
        {
            return _db.Radicals.ToList();
        }

        //var categories = (from m in _db.Categories select m).ToList();
        //    return categories;
        //    Character.Where(p => p.Id == id).FirstOrDefault();

        public void SaveRad(Radical radToSave)
        {
            if (radToSave.Id == 0) {
                _db.Radicals.Add(radToSave);
                _db.SaveChanges();
            } else {
                var original = this.Find(radToSave.Id);
                original.Symbol = radToSave.Symbol;
                original.Pinyin = radToSave.Pinyin;
                original.Meaning = radToSave.Meaning;
                original.StrokesNum = radToSave.StrokesNum;
                _db.SaveChanges();
            }
        }

        public Radical Find(int id)
        {
            return _db.Radicals.Find(id);
        }
        public void Delete(int id)
        {
            var radical = this.Find(id);
            _db.Radicals.Remove(radical);
            _db.SaveChanges();
        }
    }
}