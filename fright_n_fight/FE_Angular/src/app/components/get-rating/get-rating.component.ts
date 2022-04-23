import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'app-get-rating',
  templateUrl: './get-rating.component.html',
  styleUrls: ['./get-rating.component.scss']
})
export class GetRatingComponent implements OnInit {

  movie_id: number;
  rating: Partial<Rating> = {};
  constructor(private httpClient: HttpClient, activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService) {
    this.movie_id = +activatedRoute.snapshot.params['movie_id'];
  }
  ngOnInit(): void {
    this.getRating();
  }

  getRating() {
    return this.backendAPIService.getRating(this.movie_id).subscribe({ 
    next: (res) => this.rating = res,
    error: () => console.log('error'),
    complete: () => console.log('rating_movie')
  });
  }

}
