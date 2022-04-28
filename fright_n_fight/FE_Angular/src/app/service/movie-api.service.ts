import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieCredits } from '../models/movieCredits';
import { MovieData } from '../models/movieData';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  TMDBKey : string = "d62b14e9585c8c3ee60681ad78dc178a" ;
  TMDBUrlBase : string = "https://api.themoviedb.org/3/movie/";
  urlLocandina: string = "https://image.tmdb.org/t/p/original/"

  constructor(private httpClient: HttpClient) { }

  getMovieDetails(movieId: number | null){
    return this.httpClient.get<MovieData>(`${this.TMDBUrlBase}${movieId}?api_key=${this.TMDBKey}&language=it-it`);
  }

  getMovieCredits(movieId: number | null){
    return this.httpClient.get<MovieCredits>(`${this.TMDBUrlBase}${movieId}/credits?api_key=${this.TMDBKey}&language=it-it`);
  }

  getLocandina(posterPath: string | undefined){
    return `${this.urlLocandina}${posterPath}`;
  }

}