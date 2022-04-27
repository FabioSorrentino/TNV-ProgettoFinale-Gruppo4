import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';
import { BackendApiService } from 'src/app/service/backend-api.service';

@Component({
  selector: 'app-create-favourite-movie',
  templateUrl: './create-favourite-movie.component.html',
  styleUrls: ['./create-favourite-movie.component.scss']
})
export class CreateFavouriteMovieComponent implements OnInit {

  movie : FavouriteMovie | null = null;

  constructor(private backendAPIService : BackendApiService) { }

  ngOnInit(): void {
  }

  createFavouriteMovie(favMovie: NgForm) {
    this.backendAPIService.addFavouriteMovie(favMovie.value).subscribe({
      next: () => console.log('Favourite Movie added!'),
      error: () => console.log('Error!')
    })
  }
}
