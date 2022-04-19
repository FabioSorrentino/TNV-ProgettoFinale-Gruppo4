namespace MovieApp.RestAPI.Model
{
    public class ErrorResponse
    {
#pragma warning disable CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
        public string ErrorMessage { get; set; }
#pragma warning restore CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
        public DateTime timestamp { get; set; }
    }
}
