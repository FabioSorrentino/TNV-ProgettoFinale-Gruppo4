import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { ActivatedRoute } from '@angular/router';
import { Rating } from 'src/app/models/rating';


@Component({
  selector: 'app-insert-rating',
  templateUrl: './insert-rating.component.html',
  styleUrls: ['./insert-rating.component.scss']
})
export class InsertRatingComponent implements OnInit {

  @Input(`movieId`) movieId: number | null = null;
  userId: number | null = null;

  constructor(private httpClient : HttpClient, private backendAPIService: BackendApiService, public tokenStorageService: TokenStorageService,
    private activatedRoute: ActivatedRoute, public movieAPIService: MovieApiService) { 
    }

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUserId();
  }

  /*createNewRating (ratingForm: NgForm) {
    let firstRating: Partial<Rating> ={user_id: this.userId, movie_id: this.movieId, movie_rating: ratingForm.value.movie_rating};
    
    
    this.backendAPIService.createNewRating(firstRating).subscribe({
      next: () => console.log('New rating created!'),
      error: () => console.log('Error!')
    });
  }*/
}
