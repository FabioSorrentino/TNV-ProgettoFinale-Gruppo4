using System.Text.Json.Serialization;

namespace MovieApp.RestAPI.Model.Request
{
    public class CommentsCreateParameters
    {
        [JsonPropertyName("user_id")]
        public int user_id { get; set; }

        [JsonPropertyName("movie_id")]
        public int movie_id { get; set; }

        [JsonPropertyName("commentText")]
#pragma warning disable CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.

        public string commentText { get; set; }
#pragma warning restore CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
    }
}
