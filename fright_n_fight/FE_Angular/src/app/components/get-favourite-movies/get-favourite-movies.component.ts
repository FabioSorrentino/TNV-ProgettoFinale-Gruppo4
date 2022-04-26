import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';


@Component({
  selector: 'app-get-favourite-movies',
  templateUrl: './get-favourite-movies.component.html',
  styleUrls: ['./get-favourite-movies.component.scss']
})
export class GetFavouriteMoviesComponent implements OnInit {

  userId: number;
  movies: FavouriteMovie[] = [];

  constructor(private backendAPIService: BackendApiService, private activatedRoute: ActivatedRoute) {
    this.userId = + activatedRoute.snapshot.params['userId'];
   }

  ngOnInit(): void {
    this.getAllFavouriteMovies();
  }

  getAllFavouriteMovies(){
    this.backendAPIService.getAllFavouriteMoviesByUser(this.userId).subscribe({
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
  });
  }

}
