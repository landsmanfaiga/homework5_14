using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework5_14.Data
{
    public class BookmarksRepo
    {
        private readonly string _connectionString;
        public BookmarksRepo(string connectionString)
        {
             _connectionString = connectionString;
        }

        public void AddBookmark(Bookmark bookmark)
        {
            var context = new BookmarksDataContext(_connectionString);
            context.Bookmarks.Add(bookmark);
            context.SaveChanges();
        }

        public void DeleteBookmark(int id)
        {
            var context = new BookmarksDataContext(_connectionString);
            Bookmark bookmark = context.Bookmarks.FirstOrDefault(x => x.Id == id);
            context.Bookmarks.Remove(bookmark);
            context.SaveChanges();
        }

        public List<Bookmark> GetBookmarks(int id)
        {
            var context = new BookmarksDataContext(_connectionString);
            return context.Bookmarks.Where(b => b.UserId == id).ToList();
        }

        public void EditBookmark(Bookmark bookmark)
        {
            var context = new BookmarksDataContext(_connectionString);
            context.Bookmarks.Update(bookmark);
            context.SaveChanges();
        }

   
    }
}
