import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCredits } from 'src/app/models/movieCredits';
import { MovieData } from 'src/app/models/movieData';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-get-movie-detail',
  templateUrl: './get-movie-detail.component.html',
  styleUrls: ['./get-movie-detail.component.scss']
})
export class GetMovieDetailComponent implements OnInit {

  movieId: number|null = null;
  movieData: MovieData | null = null;
  movieCredits: MovieCredits | null = null;
  genre: Partial<MovieData>[] = [];
  user_id: number | null = this.tokenStorageService.getUserId();

  constructor(public backendAPIService: BackendApiService, activatedRoute: ActivatedRoute, 
    public movieAPIService: MovieApiService , public tokenStorageService: TokenStorageService ) { 
      this.movieId = +activatedRoute.snapshot.params['movieId'];
    }

  ngOnInit(): void {
    this.getMovieData();
  }
  
  getMovieData(){
    this.movieAPIService.getMovieDetails(this.movieId).subscribe({
      next: (res) => this.movieData = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
    }),

    this.movieAPIService.getMovieCredits(this.movieId).subscribe({
      next: (res) => this.movieCredits = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
    })

  }
}
