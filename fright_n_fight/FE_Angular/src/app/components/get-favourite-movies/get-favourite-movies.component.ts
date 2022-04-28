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
    this.getAllFavouriteMovies();
    //this.getAllFavouriteMoviesByUserId(this.tokenStorageService.getUserId())
  }

  getAllFavouriteMovies(){
    this.userId = this.tokenStorageService.getUserId();
    this.backendAPIService.getAllFavouriteMoviesByUserId(this.userId).subscribe({   //da modificare prima di pushare
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
  });
  }

  /*getAllFavouriteMoviesByUserId(userId: number|null){
    this.backendAPIService.getAllFavouriteMoviesByUserId(userId).subscribe({
      next: (favouriteMovies) => {
        this.favouriteMovies = favouriteMovies;
        
        for (let i = 0; i < this.favouriteMovies.length; i++) {
            this.movieAPIService.getMovieCredits(this.favouriteMovies[i].movie_id).subscribe({
              next : (movieCredit) => this.moviesCredits[i]= movieCredit
            }),
            this.movieAPIService.getMovieDetails(this.favouriteMovies[i].movie_id).subscribe({
              next : (movieData) => this.moviesData[i] = movieData
          })
        }
      }
    });
  }*/
}
