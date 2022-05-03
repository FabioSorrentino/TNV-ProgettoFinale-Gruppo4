import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/comments';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-get-comment',
  templateUrl: './get-comment.component.html',
  styleUrls: ['./get-comment.component.scss']
})
export class ListCommentsComponent implements OnInit {
  
  @Input(`movie_id`) movie_id: number|null = null;
  @Input(`user_id`) user_id: number|null = null;
  comment: Partial<Comments> | null = null;
  constructor(activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService, 
  public tokenStorageService: TokenStorageService ) {
  }

  ngOnInit(): void {
    this.getCommentByUserIdMovieId();
  }

  getCommentByUserIdMovieId() {
    return this.backendAPIService.getCommentByUserIdMovieId(this.user_id , this.movie_id).subscribe({ 
    next: (res) => this.comment = res,
    error: () => console.log('error'),
    complete: () => console.log('comments_movie')
  });
  }

}
