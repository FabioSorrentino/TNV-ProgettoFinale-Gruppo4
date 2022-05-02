using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Model
{
    public class Comments
    {
        public int Id { get; }
        public int user_id { get; set; }
        public int movie_id {get; set; }
        public string commentText { get; set; }

        public Comments(int userId, int movieId, string comment)
        {
            Id = 0;
            user_id = userId;
            movie_id = movieId;
            commentText = comment;
        }

        public Comments(int id, int userId, int movieId, string comment) : this(userId, movieId, comment)
        {
            Id = id;
        }
    }
}
