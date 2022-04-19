using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class InvalidNumberCharactersCommentException : Exception
    {
        public InvalidNumberCharactersCommentException(int min, int lunghezzaCommento) : 
            base($"Il numero di caratteri inserito:({lunghezzaCommento}) deve essere superiore a {min}")
        {

        }

    }
}
