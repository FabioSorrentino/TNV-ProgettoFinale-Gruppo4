import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-get-rating',
  templateUrl: './get-rating.component.html',
  styleUrls: ['./get-rating.component.scss']
})
export class GetRatingComponent implements OnInit {
  @Input(`movie_id`) movie_id: number|null = null;
  @Input(`user_id`) user_id: number|null = null;

  constructor(activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService,
    public tokenStorageService: TokenStorageService,) {
  }
  
  ngOnInit(): void {
    this.backendAPIService.getRatingsByUserIdMovieId(this.user_id, this.movie_id).subscribe({ 
      next: (res) => {
        for(let i = 0; i < res.Ratings[0].movie_rating; i++){
          let stars = document.createElement('div');
          stars.className = "fa fa-star checked";
            document.getElementsByTagName('body')[0].appendChild(stars);
        }
      },
      error: () => console.log('error'),
      complete: () => console.log('Stampa completata')
    });
  }
}