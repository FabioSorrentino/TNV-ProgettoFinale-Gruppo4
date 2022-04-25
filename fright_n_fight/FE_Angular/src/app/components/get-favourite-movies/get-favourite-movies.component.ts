import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/backend-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';


@Component({
  selector: 'app-get-favourite-movies',
  templateUrl: './get-favourite-movies.component.html',
  styleUrls: ['./get-favourite-movies.component.scss']
})
export class GetFavouriteMoviesComponent implements OnInit {

  movies: FavouriteMovie[] = [];
  constructor(private backendAPIService: BackendApiService) { }

  ngOnInit(): void {
    this.getAllFavouriteMovies();
  }

  getAllFavouriteMovies(){
    this.backendAPIService.getAllFavouriteMovies().subscribe({
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
  });
  }

}
