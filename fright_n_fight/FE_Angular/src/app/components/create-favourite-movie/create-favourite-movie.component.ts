import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendApiService } from 'src/app/backend-api.service';
import { FavouriteMovie } from 'src/app/models/favouriteMovie';

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
    this.backendAPIService.createFavouriteMovie(favMovie.value).subscribe({
      next: () => console.log('Favourite Movie added!'),
      error: () => console.log('Error!')
    })
  }
}
