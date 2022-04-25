import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from './models/comments';
import { Rating } from './models/rating';

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

  getRating (movie_n: number | null){
    return this.httpClient.get(`http://localhost:8000/api/movie_id/${movie_n}`)
  }

}
