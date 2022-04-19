using MovieApp.Core.Exceptions;
using MovieApp.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Service
{
    public class CommentsApplicationService
    {
        private ICommentsStorageService _commentsStorageService;

        public CommentsApplicationService(ICommentsStorageService commentsStorageService)
        {
            _commentsStorageService = commentsStorageService;
        }

        public Comments CreateComment(int userId, int movieId, string comment)
        {
            if (comment.Length < 10)
            {
                throw new InvalidNumberCharactersCommentException(10, comment.Length);
            }
            else if (userId < 0)
            {
                throw new NegativeFieldException("user_id", userId);
            }
            else if(movieId < 0)
            {
                throw new NegativeFieldException("movie_id", userId);
            }

            var commentCreatedWhitSuccess = _commentsStorageService.CreateComment(userId, movieId, comment);
            if (commentCreatedWhitSuccess != null) 
            {
                return commentCreatedWhitSuccess;
            }
            else
            {
                throw new CommentNotCreatedException();
            } 
        }

        public Comments GetCommentById(int commentId)
        {
            if (commentId.Equals(null))
            {
                throw new CommentNotFoundException(commentId);
            }
            else if (commentId < 0)
            {
                throw new NegativeFieldException("id", commentId);
            }
            else
            {
                return _commentsStorageService.GetCommentById(commentId);
            }
        } 

        public Comments? UpdateComment(int id, Comments commentWhitUpdateProperties)
        {
            if (id.Equals(null))
            {
                throw new CommentNotFoundException(id);
            }
            else if (id < 0)
            {
                throw new NegativeFieldException("id", id);
            }
            else if (commentWhitUpdateProperties.Comment.Length < 10)
            {
                throw new InvalidNumberCharactersCommentException(10, commentWhitUpdateProperties.Comment.Length);
            }
            else if (commentWhitUpdateProperties.User_id < 0)
            {
                throw new NegativeFieldException("user_id", commentWhitUpdateProperties.User_id);
            }
            else if (commentWhitUpdateProperties.Movie_id < 0)
            {
                throw new NegativeFieldException("movie_id", commentWhitUpdateProperties.Movie_id);
            }
            var commentUpdatedWhitSuccess = _commentsStorageService.UpdateComment(id, commentWhitUpdateProperties);
            if (commentUpdatedWhitSuccess != null)
            {
                return commentUpdatedWhitSuccess;
            }
            else
            {
                throw new CommentUpdateNotFoundException();
            }
        }

        public List<Comments> GetAllComments()
        {
            return _commentsStorageService.GetAllComments();
        }
        public bool DeleteCommentById(int commentId)
        {
            if (commentId < 0)
            {
                throw new NegativeFieldException("id", commentId);
            }
            if (commentId.Equals(null))
            {
                throw new CommentNotFoundDeleteException(commentId);
            }
            else
            {
                return _commentsStorageService.DeleteCommentById(commentId);
            }
        }
    }
}
