import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from 'src/app/service/backend-api.service';


@Component({
  selector: 'app-insert-rating',
  templateUrl: './insert-rating.component.html',
  styleUrls: ['./insert-rating.component.scss']
})
export class InsertRatingComponent implements OnInit {

  constructor(private httpClient : HttpClient, private backendAPIService: BackendApiService) { }

  ngOnInit(): void {
  }

  createNewRating (ratingForm: NgForm) {
    this.backendAPIService.createNewRating(ratingForm.value).subscribe({
      next: () => console.log('New rating created!'),
      error: () => console.log('Error!')
    });
  }
}
