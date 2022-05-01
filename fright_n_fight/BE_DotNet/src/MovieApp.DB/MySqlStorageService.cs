using MovieApp.Core.Model;
using MovieApp.Core.Service;
using MovieApp.DB.Entities;
using MovieApp.DB.MapperDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.DB
{
    public class MySqlStorageService : ICommentsStorageService
    {
        private CommentDBContext _context;


        public MySqlStorageService()
        {
            _context = new();
            _context.Database.EnsureCreated();
        }

        public Comments CreateComment(int userId, int movieId, string comment)
        {
            var commentVar = new CommentEntity()
            {
                User_Id = userId,
                Movie_Id = movieId,
                Comment = comment
            };

            var createdComment = _context.MovieComments.Add(commentVar);
            _context.SaveChanges();
            return CommentsEntityMapper.From(createdComment.Entity);
        }

        public bool DeleteCommentById(int commentId)
        {
            var commentToDelete = _context.MovieComments.Find(commentId);
#pragma warning disable CS8604 // Possibile argomento di riferimento Null.
            _context.MovieComments.Remove(commentToDelete);
#pragma warning restore CS8604 // Possibile argomento di riferimento Null.
            _context.SaveChanges();
            return true;
        }

        public List<Comments> GetAllComments()
        {
            var commentsList = _context.MovieComments;
            return commentsList.Select(c => CommentsEntityMapper.From(c)).ToList();
        }

        public Comments GetCommentById(int commentId)
        {
#pragma warning disable CS8604 // Possibile argomento di riferimento Null.
            return CommentsEntityMapper.From(_context.MovieComments.Find(commentId));
#pragma warning restore CS8604 // Possibile argomento di riferimento Null.
        }

        public Comments? UpdateComment(int id, Comments commentWhitUpdateProperties)
        {
            var commentToUpdate = _context.MovieComments.Find(id);
            if (commentToUpdate != null)
            {
                commentToUpdate.User_Id = commentWhitUpdateProperties.User_id;
                commentToUpdate.Movie_Id = commentWhitUpdateProperties.Movie_id;
                commentToUpdate.Comment= commentWhitUpdateProperties.Comment;
                _context.SaveChanges();
            }
            if (commentToUpdate == null) return null;

            return CommentsEntityMapper.From(commentToUpdate);
        }

        public Comments? GetCommentByUserIdMovieId(int userId, int movieId)
        {
            var comment = _context.MovieComments.FirstOrDefault(c => c.User_Id == userId && c.Movie_Id == movieId);
            if (comment != null)
            {
                return CommentsEntityMapper.From(comment);
            }
            return null;
    
        }
    }
}
