using MovieApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Service
{
    public interface ICommentsStorageService
    {
        Comments CreateComment(int userId, int movieId, string comment);
        List<Comments> GetAllComments();
        Comments GetCommentById(int commentId);
        Comments? UpdateComment(int id, Comments commentWhitUpdateProperties);
        bool DeleteCommentById(int commentId);
    }
}
