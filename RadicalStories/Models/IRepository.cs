using System.Collections.Generic;

namespace RadicalStories.Models
{
    public interface IRepository
    {
        void Delete(int id);
        Radical Find(int id);
        IList<Radical> ListRadicals();
        void SaveRad(Radical radToSave);
    }
}