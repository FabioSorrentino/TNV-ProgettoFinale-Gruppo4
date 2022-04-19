using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class CommentNotCreatedException : Exception
    {
        public CommentNotCreatedException() : base("La creazione del commento non è andata a buon fine!!")
        {
        }
    }
}
