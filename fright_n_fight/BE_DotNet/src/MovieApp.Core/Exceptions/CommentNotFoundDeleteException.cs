using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class CommentNotFoundDeleteException : Exception
    {
        public CommentNotFoundDeleteException(int commentId) : base($"Non è stato possibile eliminare il commento con id: {commentId} in quanto inesistente")
        {
        }
    }
}
