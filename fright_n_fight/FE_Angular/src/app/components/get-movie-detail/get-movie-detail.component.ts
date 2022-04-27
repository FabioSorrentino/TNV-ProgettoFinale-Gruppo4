import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCredits } from 'src/app/models/movieCredits';
import { MovieData } from 'src/app/models/movieData';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-get-movie-detail',
  templateUrl: './get-movie-detail.component.html',
  styleUrls: ['./get-movie-detail.component.scss']
})
export class GetMovieDetailComponent implements OnInit {


  movieData: MovieData | null = null;
  movieCredits: MovieCredits | null = null;
  movieId: number = 500;
  genre: Partial<MovieData>[] = [];

  constructor(private backendAPIService: BackendApiService, activatedRoute: ActivatedRoute, 
    public movieAPIService: MovieApiService) { }

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
