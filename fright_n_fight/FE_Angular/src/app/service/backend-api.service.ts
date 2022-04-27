import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comments } from '../models/comments';
import { FavouriteMovie } from '../models/favouriteMovie';
import { Rating } from '../models/rating';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpClient: HttpClient) { 
  }

  //servizi DotNET

  getComment(movie_id: number | null){
    return this.httpClient.get<Comments>(`http://localhost:5161/comments/${movie_id}`);
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

  //servizi NODE

  getAllFavouriteMoviesByUser(userId: number){
    return this.httpClient.get<FavouriteMovie[]>(`http://localhost:3001/favourites/${userId}`);
  }

  getFavouriteMovieById(movie_id: number | null){
    return this.httpClient.get<FavouriteMovie>(`http://localhost:3001/favourites/${movie_id}`);
  }

  addFavouriteMovie(movie: FavouriteMovie){
    return this.httpClient.post<FavouriteMovie>(`http://localhost:3001/favourites`, movie);
  }

  deleteFavouriteMovie(movie_id: number | null){
    return this.httpClient.delete<FavouriteMovie>(`http://localhost:3001/favourites/${movie_id}`);
  }

  //servizi SB
  login(header: {}){
    return this.httpClient.get<number>('http://localhost:8080/api/auth/login', {headers: header})
  }
  signup(addUserForm: NgForm){
    console.log(addUserForm.value);
    return this.httpClient.post<number>('http://localhost:8080/api/auth/register', addUserForm.value)
  }
}
