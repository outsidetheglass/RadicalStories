using System.Collections.Generic;

namespace RadicalStories.Models
{
    public interface IRepository
    {
        void Delete(int id);
        Character Find(int id);
        IList<Character> ListCharacters();
        void SaveChar(Character charToSave);
    }
}