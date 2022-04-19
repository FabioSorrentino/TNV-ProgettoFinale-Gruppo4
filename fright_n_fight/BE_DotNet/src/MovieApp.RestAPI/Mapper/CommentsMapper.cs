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
                User_id = comments.User_id,
                Movie_id = comments.Movie_id,
                Comment = comments.Comment
            };
        }

        public static Comments From (CommentsDTO commentsDTO)
        {
#pragma warning disable CS8604 // Possibile argomento di riferimento Null.
            return new(commentsDTO.Id ,commentsDTO.User_id, commentsDTO.Movie_id, commentsDTO.Comment);
#pragma warning restore CS8604 // Possibile argomento di riferimento Null.
        }
    }
}
