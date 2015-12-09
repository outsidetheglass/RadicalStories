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

        public IList<Character> ListCharacters()
        {
            return _db.Characters.ToList();
        }

        //var categories = (from m in _db.Categories select m).ToList();
        //    return categories;
        //    Character.Where(p => p.Id == id).FirstOrDefault();

        public void SaveChar(Character charToSave)
        {
            if (charToSave.Id == 0) {
                _db.Characters.Add(charToSave);
                _db.SaveChanges();
            } else {
                var original = this.Find(charToSave.Id);
                original.Symbol = charToSave.Symbol;
                original.Pinyin = charToSave.Pinyin;
                original.Meaning = charToSave.Meaning;
                original.Radicals = charToSave.Radicals;
                original.Formation = charToSave.Formation;
                _db.SaveChanges();
            }
        }

        public Character Find(int id)
        {
            return _db.Characters.Find(id);
        }
        public void Delete(int id)
        {
            var character = this.Find(id);
            _db.Characters.Remove(character);
            _db.SaveChanges();
        }
    }
}