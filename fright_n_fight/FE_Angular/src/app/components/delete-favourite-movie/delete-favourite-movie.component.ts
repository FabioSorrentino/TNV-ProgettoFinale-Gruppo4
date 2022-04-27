import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';


@Component({
  selector: 'app-delete-favourite-movie',
  templateUrl: './delete-favourite-movie.component.html',
  styleUrls: ['./delete-favourite-movie.component.scss']
})
export class DeleteFavouriteMovieComponent implements OnInit {

  movieId: number|null = null;
  favouriteMovieId : number = 1 // PROVA DA CANCELLARE -- prende il valore da ???
  constructor(activatedRoute : ActivatedRoute, private backendAPIService: BackendApiService) { 
    this.movieId = +activatedRoute.snapshot.params['movie_id'];
  }

  ngOnInit(): void {
  }

  deleteFavouriteMovie()
  {
    this.backendAPIService.deleteFavouriteMovie(this.favouriteMovieId).subscribe({
      error: () => console.log('Error!'),
      complete: () => console.log('Favourite Movie deleted!')
    });
  }
}
