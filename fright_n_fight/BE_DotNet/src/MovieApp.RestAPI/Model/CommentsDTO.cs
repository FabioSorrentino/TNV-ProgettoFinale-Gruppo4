namespace MovieApp.RestAPI.Model
{
    public class CommentsDTO
    {
        public int Id { get; set; }
        public int User_id { get; set; }
        public int Movie_id { get; set; }
        public string? Comment { get; set; }
    }
}
