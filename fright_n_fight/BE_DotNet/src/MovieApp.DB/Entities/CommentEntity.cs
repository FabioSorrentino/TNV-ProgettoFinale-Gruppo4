using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.DB.Entities
{
    [Table("comments")]
    public class CommentEntity
    {
        [Column("id"), Key]
        public int Id { get; set; }

        [Column("user_id")]
        public int User_Id { get; set; }

        [Column("movie_id")]
        public int Movie_Id { get; set; }

        [Column("comment")]
#pragma warning disable CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
        public string Comment { get; set; }
#pragma warning restore CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
    }
}
