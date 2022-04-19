using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class CommentNotFoundException : Exception
    {
        public CommentNotFoundException(int commentId) : base($"Non è stato trovato nessun commento con id: {commentId} ")
        {
        }
    }
}
