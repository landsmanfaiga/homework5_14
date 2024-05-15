using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using homework5_14.Data;
using Microsoft.AspNetCore.Authorization;

namespace homework5_14.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkController : ControllerBase
    {
        private readonly string _connectionString;
        public BookmarkController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Authorize]
        [HttpPost]
        [Route("addbookmark")]
        public void AddBookmark(Bookmark bookmark)
        {
            var repo2 = new UserRepo(_connectionString);
            bookmark.UserId = repo2.GetByEmail(User.Identity.Name).Id;          
            var repo = new BookmarksRepo(_connectionString);
            repo.AddBookmark(bookmark);
        }

        [Authorize]
        [HttpPost]
        [Route("deletebookmark")]
        public void DeleteBookmark(int id)
        {
            var repo = new BookmarksRepo(_connectionString);
            repo.DeleteBookmark(id);
        }

        [Authorize]
        [HttpGet]
        [Route("getbookmarks")]
        public List<Bookmark> GetBookmarks()
        {
            var repo1 = new UserRepo(_connectionString);
            int id = repo1.GetByEmail(User.Identity.Name).Id;
            var repo = new BookmarksRepo(_connectionString);
            return repo.GetBookmarks(id);
        }

        [Authorize]
        [HttpPost]
        [Route("editbookmark")]
        public void EditBookmark(Bookmark bookmark)
        {
            var repo = new BookmarksRepo(_connectionString);
            repo.EditBookmark(bookmark);
        }

    }
}
