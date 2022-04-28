import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-get-favourite-movies',
  templateUrl: './get-favourite-movies.component.html',
  styleUrls: ['./get-favourite-movies.component.scss']
})
export class GetFavouriteMoviesComponent implements OnInit {

  userId: number | null = null;
  movies: FavouriteMovie[] = [];

  constructor(private backendAPIService: BackendApiService, private activatedRoute: ActivatedRoute, public tokenStorageService: TokenStorageService) {
   }

  ngOnInit(): void {
    this.getAllFavouriteMovies();
  }

  getAllFavouriteMovies(){
    this.userId = this.tokenStorageService.getUserId();
    this.backendAPIService.getAllFavouriteMoviesByUser(this.userId).subscribe({   //da modificare prima di pushare
      next: (res) => this.movies = res,
      error: () => console.log('Error!'),
      complete: () => console.log('Complete')
  });
  }

}
