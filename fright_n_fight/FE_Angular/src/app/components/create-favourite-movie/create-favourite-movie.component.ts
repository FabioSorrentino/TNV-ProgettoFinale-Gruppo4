import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/comments';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { Rating } from 'src/app/models/rating';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-create-favourite-movie',
  templateUrl: './create-favourite-movie.component.html',
  styleUrls: ['./create-favourite-movie.component.scss']
})
export class CreateFavouriteMovieComponent implements OnInit {

  movieId: number | null = null;
  userId: number | null = null
  favouriteMovie : FavouriteMovie = {} as FavouriteMovie;
  firstComment: Comments = {} as Comments;
  firstRating: Rating = {} as Rating;
  favList: FavouriteMovie[] = [];
  isFavMovie: boolean = false;

  constructor(private backendAPIService : BackendApiService, public tokenStorageService: TokenStorageService,
    activatedRoute: ActivatedRoute) { 
      this.movieId = +activatedRoute.snapshot.params['movieId'];
    }

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUserId();
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

  createFavouriteMovie(favourite: NgForm) {
    this.favouriteMovie = { id: null, movie_id: this.movieId, user_id: this.userId };
    this.firstComment = {user_id: this.userId, movie_id: this.movieId, comment: favourite.value.comment};
    this.firstRating = {user_id: this.userId, movie_id: this.movieId, movie_rating: favourite.value.movie_rating};
    this.backendAPIService.createComment(this.firstComment).subscribe({
      next: () => {
        console.log("comment created");
        this.backendAPIService.createNewRating(this.firstRating).subscribe({
          next: () => {
            console.log("New rating created!"); 
            this.backendAPIService.addFavouriteMovie(this.favouriteMovie).subscribe({
              next: () => { 
                console.log("Favourite Movie added!"); 
                },
            })
          },
        })
      },
    });

  }
}
