using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class CommentUpdateNotFoundException : Exception
    {
        public CommentUpdateNotFoundException() : base("La modifica del commento non è andata a buon fine!!")
        {
        }
    }
}
