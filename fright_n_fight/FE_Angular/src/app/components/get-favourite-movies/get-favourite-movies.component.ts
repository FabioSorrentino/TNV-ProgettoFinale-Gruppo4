import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { MovieCredits } from 'src/app/models/movieCredits';
import { MovieData } from 'src/app/models/movieData';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-get-favourite-movies',
  templateUrl: './get-favourite-movies.component.html',
  styleUrls: ['./get-favourite-movies.component.scss']
})
export class GetFavouriteMoviesComponent implements OnInit {

  userId: number | null = null;
  movies: FavouriteMovie[] = [];
  //favouriteMovies: FavouriteMovie[] = [];
  moviesData: MovieData []= [];
  moviesCredits: MovieCredits [] = [];

  constructor(private backendAPIService: BackendApiService, private activatedRoute: ActivatedRoute,
    public tokenStorageService: TokenStorageService, public movieAPIService: MovieApiService) {
  }

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUserId();
    this.backendAPIService.getAllFavouriteMoviesByUserId(this.userId).subscribe({   //da modificare prima di pushare
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
  });
  }


  getAllFavouriteMoviesByUser(){
    this.backendAPIService.getAllFavouriteMoviesByUserId(this.userId).subscribe({
      next: (res) => {
        this.movies = res;
        
        for (let i = 0; i < this.movies.length; i++) {
            let movieId = this.movies[i].movie_id
            this.movieAPIService.getMovieCredits(movieId).subscribe({
              next : (movieCredit) => this.moviesCredits[i]= movieCredit
            }),
            this.movieAPIService.getMovieDetails(movieId).subscribe({
              next : (movieData) => this.moviesData[i] = movieData
          })
        }
      }
    });
  }
}