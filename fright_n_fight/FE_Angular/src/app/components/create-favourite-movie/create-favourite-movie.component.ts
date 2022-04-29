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
  movieId: number = 500; // PROVA DA CANCELLARE -- prende il movieId da ???
  favouriteMovie : FavouriteMovie | null = null;
  favList: FavouriteMovie[] = [];
  isFavMovie: boolean = false;
  isVisible: boolean = true;

  constructor(private backendAPIService : BackendApiService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUserId()
    this.checkListFavouriteMovie(this.movieId)
  }

  checkListFavouriteMovie(movieId: number| null){
    if (this.tokenStorageService.getUserId != null){
      this.backendAPIService.getAllFavouriteMoviesByUserId(this.userId).subscribe({
        next: (res) => {this.favList = res;
          for (let i = 0; i < this.favList.length;  i++) {
            if (this.favList[i].movie_id == movieId){
              this.isFavMovie = true;
              break;
            }else{
              this.isFavMovie = false;
            }
          }
        }
      })
    }
  }

  createFavouriteMovie() {
    this.favouriteMovie = { id: null, movie_id: this.movieId, user_id: this.userId }
    this.backendAPIService.addFavouriteMovie(this.favouriteMovie).subscribe({
      next: () => console.log('Favourite Movie added!'),
      error: () => console.log('Error!')
    })
  }
}
