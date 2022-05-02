using MovieApp.Core.Model;
using MovieApp.RestAPI.Model;

namespace MovieApp.RestAPI.Mapper
{
    public static class CommentsMapper
    {
        public static CommentsDTO From(Comments comments)
        {
            return new()
            {
                Id = comments.Id,
                user_id = comments.user_id,
                movie_id = comments.movie_id,
                commentText = comments.commentText
            };
        }

        public static Comments From (CommentsDTO commentsDTO)
        {
#pragma warning disable CS8604 // Possibile argomento di riferimento Null.
            return new(commentsDTO.Id ,commentsDTO.user_id, commentsDTO.movie_id, commentsDTO.commentText);
#pragma warning restore CS8604 // Possibile argomento di riferimento Null.
        }
    }
}
