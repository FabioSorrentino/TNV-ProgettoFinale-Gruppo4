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
  rate: Rating | null = null;
  //rating: Partial<Rating> = {};
  



  constructor(activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService) {
    this.movie_id = +activatedRoute.snapshot.params['movie_id'];
    
  }
  ngOnInit(): void {
    this.getRating();
    
  }

  getRating() {
    return this.backendAPIService.getRating(this.movie_id).subscribe({ 
    //next: (res) => console.log(res),
    next: (res) => this.rate = res,
    error: () => console.log('error'),
    complete: () => console.log('Stampa completata')
  });
  }

}
