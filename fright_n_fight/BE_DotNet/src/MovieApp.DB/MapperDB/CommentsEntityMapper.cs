using MovieApp.Core.Model;
using MovieApp.DB.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.DB.MapperDB
{
    public static class CommentsEntityMapper
    {
        public static CommentEntity From(Comments comments)
        {
            return new()
            {
                Id = comments.Id,
                User_Id = comments.User_id,
                Movie_Id = comments.Movie_id,
                Comment = comments.Comment
            };
        }

        public static Comments From(CommentEntity commentsEntity)
        {
            return new(commentsEntity.Id, commentsEntity.User_Id, commentsEntity.Movie_Id, commentsEntity.Comment);
        }

    }
}
