import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { MovieApiService } from 'src/app/service/movie-api.service';


@Component({
  selector: 'app-delete-favourite-movie',
  templateUrl: './delete-favourite-movie.component.html',
  styleUrls: ['./delete-favourite-movie.component.scss']
})
export class DeleteFavouriteMovieComponent implements OnInit {

  movieId: number|null = null;
  favouriteMovieId : number = 0 // PROVA DA CANCELLARE -- prende il valore da ???
  constructor(activatedRoute : ActivatedRoute, private backendAPIService: BackendApiService, public movieAPIService: MovieApiService) { 
    this.movieId = 300;
  }

  ngOnInit(): void {
  }

  deleteFavouriteMovie()
  {
    this.backendAPIService.deleteFavouriteMovie(this.movieId).subscribe({
      error: () => console.log('Error!'),
      complete: () => console.log('Favourite Movie deleted!')
    });
  }
}
