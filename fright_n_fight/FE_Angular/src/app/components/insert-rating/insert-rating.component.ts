import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { ActivatedRoute } from '@angular/router';
import { Rating_NewEntry } from 'src/app/models/rating';


@Component({
  selector: 'app-insert-rating',
  templateUrl: './insert-rating.component.html',
  styleUrls: ['./insert-rating.component.scss']
})
export class InsertRatingComponent implements OnInit {

  @Input(`movieId`) movieId: number | null = null;
  @Input((`userId`)) userId : number | null = null;

  constructor(private httpClient : HttpClient, private backendAPIService: BackendApiService, public tokenStorageService: TokenStorageService,
    private activatedRoute: ActivatedRoute, public movieAPIService: MovieApiService) { 
    }

  ngOnInit(): void {
  }

  createNewRating (ratingForm: NgForm) {
    let firstRating: Rating_NewEntry ={user_id: this.userId, movie_id: this.movieId, movie_rating: ratingForm.controls['movie_rating'].value};
    this.backendAPIService.createNewRating(firstRating).subscribe({
      next: () => console.log('New rating created!'),
      error: () => console.log('Error!')
    })
  }
}
