import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieData } from 'src/app/models/movieData';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-add-comment-rating',
  templateUrl: './add-comment-rating.component.html',
  styleUrls: ['./add-comment-rating.component.scss']
})
export class AddCommentRatingComponent implements OnInit {

  @Input((`movieId`)) movieId : number | null = null;
  @Input((`userId`)) userId : number | null = null;
  movieData: MovieData | null = null;
  
  constructor(private backendAPIService: BackendApiService, public tokenStorageService: TokenStorageService,
    private activatedRoute: ActivatedRoute, public movieAPIService: MovieApiService) { }

  ngOnInit(): void {
    this.getMovieData();
  }

  getMovieData(){
    this.movieAPIService.getMovieDetails(this.movieId).subscribe({
      next: (res) => this.movieData = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
    })
  }

  goBack(){
    window.location.href=`http://localhost:4200/home`;
  }
}

