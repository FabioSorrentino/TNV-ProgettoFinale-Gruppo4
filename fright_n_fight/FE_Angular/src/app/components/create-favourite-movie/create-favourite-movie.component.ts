import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-create-favourite-movie',
  templateUrl: './create-favourite-movie.component.html',
  styleUrls: ['./create-favourite-movie.component.scss']
})
export class CreateFavouriteMovieComponent implements OnInit {

  userId: number | null = null // PROVA DA CANCELLARE -- prende il userId da tokenStorageService 
  movieId: number = 600; // PROVA DA CANCELLARE -- prende il movieId da ???
  favouriteMovie : FavouriteMovie | null = null;
  favList: FavouriteMovie[] = [];

  constructor(private backendAPIService : BackendApiService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUserId()
  }

  createFavouriteMovie() {
    this.favouriteMovie = { movie_id: this.movieId, user_id: this.userId }
    this.backendAPIService.addFavouriteMovie(this.favouriteMovie).subscribe({
      next: () => console.log('Favourite Movie added!'),
      error: () => console.log('Error!')
    })
  }
}
