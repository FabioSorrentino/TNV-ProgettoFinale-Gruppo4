import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comments } from '../models/comments';
import { FavouriteMovie } from '../models/favouriteMovie';
import { Rating } from '../models/rating';

const SB_API_URL = 'http://localhost:8090/api/auth/';
const NODE_API_URL = 'http://localhost:3001/favourites/';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  loggedInUserId: number|null = null;

  constructor(private httpClient: HttpClient) { 
  }

  //servizi DotNET

  getComment(movie_id: number | null){
    return this.httpClient.get<Comments>(`http://localhost:5161/comments/${movie_id}`);
  }

  getCommentByUserIdMovieId(user_id: number | null, movie_id: number | null){
    return this.httpClient.get<Comments>(`http://localhost:5161/comments/${user_id}/${movie_id}`);
  }

  createComment(comment: Comments){
    return this.httpClient.post<Comments>(`http://localhost:5161/comments/`, comment);
  }

  deleteComment(commentId: number | null){
    return this.httpClient.delete<Comments>(`http://localhost:5161/comments/delete/${commentId}`);
  }

  //servizi Laravel

  createNewRating(rating: Rating){
    return this.httpClient.post<Rating>(`http://localhost:8000/api/movie`, rating);
  }

  getRating (movie_id: number | null){
    return this.httpClient.get<Rating>(`http://localhost:8000/api/movie_id/${movie_id}`);
  }

  getRatingValueByUserIdMovieId(user_id: number | null, movie_id: number | null){
    return this.httpClient.get<number>(`http://localhost:8000/api/rating/${user_id}/${movie_id}`);
  }

  //servizi NODE

  getAllFavouriteMoviesByUserId(userId: number | null){
    return this.httpClient.get<FavouriteMovie[]>(`http://localhost:3001/favourites/${userId}`);
  }

  getFavouriteMovieByUserIdMovieId(user_id: number | null, movie_id: number | null){
    return this.httpClient.get<FavouriteMovie>(`http://localhost:3001/favourites/${user_id}/${movie_id}`);
  }

  addFavouriteMovie(favouriteMovie: FavouriteMovie){
    return this.httpClient.post<FavouriteMovie>(NODE_API_URL, favouriteMovie);
  }

  deleteFavouriteMovie(favourite_id: number | null){
    return this.httpClient.delete<FavouriteMovie>(NODE_API_URL + `${favourite_id}`);
  }

  //servizi SB
  login(header: {}){
    return this.httpClient.get<string>(SB_API_URL + 'login', {headers: header})
  }

  signup(addUserForm: NgForm){
    console.log(addUserForm.value);
    return this.httpClient.post<string>(SB_API_URL + 'register', addUserForm.value)
  }
}
