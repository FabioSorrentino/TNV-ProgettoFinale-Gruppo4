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
        public int User_id { get; set; }
        public int Movie_id {get; set; }
        public string Comment { get; set; }

        public Comments(int userId, int movieId, string comment)
        {
            Id = 0;
            User_id = userId;
            Movie_id = movieId;
            Comment = comment;
        }

        public Comments(int id, int userId, int movieId, string comment) : this(userId, movieId, comment)
        {
            Id = id;
        }
    }
}
