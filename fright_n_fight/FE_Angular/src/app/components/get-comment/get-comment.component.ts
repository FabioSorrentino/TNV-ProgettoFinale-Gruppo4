import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-get-comment',
  templateUrl: './get-comment.component.html',
  styleUrls: ['./get-comment.component.scss']
})
export class ListCommentsComponent implements OnInit {

  movie_id: number;
  comment: Comments | null = null;
  constructor(private httpClient: HttpClient, activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService) {
    this.movie_id = +activatedRoute.snapshot.params['movie_id'];
  }

  ngOnInit(): void {
    this.getComment();
  }

  getComment() {
    return this.backendAPIService.getComment(this.movie_id).subscribe({ 
    next: (res) => this.comment = res,
    error: () => console.log('error'),
    complete: () => console.log('comments_movie')
  });
  }

}
