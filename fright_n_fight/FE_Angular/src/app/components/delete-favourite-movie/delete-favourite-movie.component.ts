import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';

@Component({
  selector: 'app-delete-favourite-movie',
  templateUrl: './delete-favourite-movie.component.html',
  styleUrls: ['./delete-favourite-movie.component.scss']
})
export class DeleteFavouriteMovieComponent implements OnInit {

  movie_id: number;
  constructor(activatedRoute : ActivatedRoute, private backendAPIService: BackendApiService) { 
    this.movie_id = +activatedRoute.snapshot.params['movie_id'];
  }
  ngOnInit(): void {
    this.deleteFavouriteMovie()
  }

  deleteFavouriteMovie()
  {
    this.backendAPIService.deleteFavouriteMovie(this.movie_id).subscribe({
      error: () => console.log('Error!'),
      complete: () => console.log('Favourite Movie deleted!')
    });
  }
}
