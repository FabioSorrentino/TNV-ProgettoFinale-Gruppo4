using System.Text.Json.Serialization;

namespace MovieApp.RestAPI.Model.Request
{
    public class CommentsCreateParameters
    {
        [JsonPropertyName("user_id")]
        public int User_Id { get; set; }

        [JsonPropertyName("movie_id")]
        public int Movie_Id { get; set; }

        [JsonPropertyName("comment")]
#pragma warning disable CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
        public string Comment { get; set; }
#pragma warning restore CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
    }
}
