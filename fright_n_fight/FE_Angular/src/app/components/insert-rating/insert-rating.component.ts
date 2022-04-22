import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-rating',
  templateUrl: './insert-rating.component.html',
  styleUrls: ['./insert-rating.component.scss']
})
export class InsertRatingComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  newRating (ratingForm: NgForm) {
    this.httpClient.post(`http://localhost:8000/api/movie`, ratingForm.value).subscribe({
      next: () => console.log('New rating created!'),
      error: () => console.log('Error!')
    });
  }
}
