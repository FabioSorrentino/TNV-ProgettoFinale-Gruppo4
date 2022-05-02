namespace MovieApp.RestAPI.Model
{
    public class CommentsDTO
    {
        public int Id { get; set; }
        public int user_id { get; set; }
        public int movie_id { get; set; }
        public string? commentText { get; set; }
    }
}
