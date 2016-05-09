using System.Collections.Generic;
using RadicalStories.Models;

namespace RadicalStories.Services {
    public interface ICharacterServices {
        IList<Radical> RadicalSearch(int id);
        void Delete(int id);
        Radical Find(int id);
        IList<Radical> ListRadicals();
        void SaveRad(Radical radToSave);
    }
}