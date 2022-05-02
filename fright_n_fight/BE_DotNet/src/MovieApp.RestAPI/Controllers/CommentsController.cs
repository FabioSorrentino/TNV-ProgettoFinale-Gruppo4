using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MovieApp.Core.Exceptions;
using MovieApp.Core.Model;
using MovieApp.Core.Service;
using MovieApp.RestAPI.Mapper;
using MovieApp.RestAPI.Model;
using MovieApp.RestAPI.Model.Request;

namespace MovieApp.RestAPI.Controllers
{
    [ApiController]
    [Route("comments")]
    public class CommentsController : ControllerBase
    {
        private CommentsApplicationService _commentsApplicationService;

        public CommentsController(CommentsApplicationService commentsApplicationService)
        {
            _commentsApplicationService = commentsApplicationService;
        }

        [EnableCors("Policy1")]
        [HttpGet]
        [Route("{comment-id}")]
        public ActionResult<CommentsDTO> GetCommentById([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                var comment = _commentsApplicationService.GetCommentById(commentId);
#pragma warning disable CS8604 // Possibile argomento di riferimento Null.
                return Ok(CommentsMapper.From(comment));
#pragma warning restore CS8604 // Possibile argomento di riferimento Null.

            }
            catch (CommentNotFoundException ex)
            {
                return NotFound(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NegativeFieldException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
        }

        [EnableCors("Policy1")]
        [HttpPost]
        public ActionResult<CommentsDTO> CreateComment([FromBody] CommentsCreateParameters parameters)
        {
            try
            {
                var createdComment = _commentsApplicationService.CreateComment(parameters.user_id, parameters.movie_id, parameters.commentText);
                return Ok(CommentsMapper.From(createdComment));
            }
            catch (InvalidNumberCharactersCommentException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NegativeFieldException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (CommentNotCreatedException ex)
            {
                return NotFound(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
        }

        [EnableCors("Policy1")]
        [HttpPut]
        [Route("{comment-id}")]
        public ActionResult<CommentsDTO> UpdateCommentById([FromRoute(Name = "comment-id")] int commentId, 
            [FromBody] CommentsCreateParameters parameters)
        {
            try
            {
                var comment = _commentsApplicationService.GetCommentById(commentId);
                Comments commentWhitUpdateProp = new(parameters.movie_id, parameters.user_id, parameters.commentText);
#pragma warning disable CS8602 // Dereferenziamento di un possibile riferimento Null.
                comment = _commentsApplicationService.UpdateComment(comment.Id,
                    commentWhitUpdateProp);
#pragma warning restore CS8602 // Dereferenziamento di un possibile riferimento Null.
#pragma warning disable CS8604 // Possibile argomento di riferimento Null.
                return Ok(CommentsMapper.From(comment));
#pragma warning restore CS8604 // Possibile argomento di riferimento Null.
            }
            catch (CommentNotFoundException ex)
            {
                return NotFound(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NegativeFieldException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (InvalidNumberCharactersCommentException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (CommentUpdateNotFoundException ex)
            {
                return NotFound(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
        }

        [EnableCors("Policy1")]
        [HttpGet]
        public ActionResult<List<CommentsDTO>> GetCommentsList()
        {
            try
            {
                var commentsList = _commentsApplicationService.GetAllComments();
                return Ok(commentsList.Select(comment => CommentsMapper.From(comment)));
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }

        }

        [EnableCors("Policy1")]
        [HttpDelete]
        [Route("delete/{comment-id}")]
        public ActionResult<bool> DeleteCommentById([FromRoute(Name = "comment-id")] int commentId)
        {
            try
            {
                var commentDelete = _commentsApplicationService.DeleteCommentById(commentId);
                return Ok(commentDelete);
            }
            catch (CommentNotFoundDeleteException ex)
            {

                return NotFound(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
        }

        [EnableCors("Policy1")]
        [HttpGet]
        [Route("{user-id}/{movie-id}")]
        public ActionResult<CommentsDTO> GetCommentByUserIdMovieId([FromRoute(Name = "user-id")] int userId, [FromRoute(Name = "movie-id")] int movieId)
        {
            try
            {
                var comment = _commentsApplicationService.GetCommentByUserIdMovieId(userId, movieId);
#pragma warning disable CS8604 // Possibile argomento di riferimento Null.
                return Ok(CommentsMapper.From(comment));
#pragma warning restore CS8604 // Possibile argomento di riferimento Null.

            }
            catch (CommentNotFoundException ex)
            {
                return NotFound(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NegativeFieldException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
            catch (NullReferenceException ex)
            {
                return BadRequest(new ErrorResponse()
                {
                    ErrorMessage = ex.Message,
                    timestamp = DateTime.Now
                });
            }
        }

    }
}
