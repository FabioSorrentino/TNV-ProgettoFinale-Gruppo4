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
                user_id = comments.user_id,
                movie_id = comments.movie_id,
                commentText = comments.commentText
            };
        }

        public static Comments From(CommentEntity commentsEntity)
        {
            return new(commentsEntity.Id, commentsEntity.user_id, commentsEntity.movie_id, commentsEntity.commentText);
        }

    }
}
