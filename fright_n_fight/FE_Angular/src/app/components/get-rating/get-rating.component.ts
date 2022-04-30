import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from 'src/app/models/rating';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-get-rating',
  templateUrl: './get-rating.component.html',
  styleUrls: ['./get-rating.component.scss']
})
export class GetRatingComponent implements OnInit {

  movie_id: number;
  user_id: number | null = null;
  //rating: Rating | null = null;
  rating: number;

  constructor(activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService,
    public tokenStorageService: TokenStorageService,) {
      this.rating = 0;
      this.movie_id = activatedRoute.snapshot.params['movie_id'];  
  }
  
  ngOnInit(): void {
    this.getRating();
    for(let i = 0; i < this.rating; i++){
    let stars = document.createElement('div');
    stars.className = "fa fa-star checked";
      document.getElementsByTagName('body')[0].appendChild(stars);
    }
    this.user_id = this.tokenStorageService.getUserId();
    //this.getRating();
  }

  getRating() {
    return this.backendAPIService.getRatingValueByUserIdMovieId(this.user_id, this.movie_id).subscribe({ 
    next: (res) => this.rating = res,
    error: () => console.log('error'),
    complete: () => console.log('Stampa completata')
  });
  }
}
