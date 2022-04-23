import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';

import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.scss']
})
export class DeleteCommentComponent implements OnInit {

  commentId: number;
  constructor(private httpClient: HttpClient, activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService) {
    this.commentId = +activatedRoute.snapshot.params['commentId'];
   }

  
  ngOnInit(): void {
    this.deleteComment()
  }

  deleteComment() {
    this.backendAPIService.deleteComment(this.commentId)
    .subscribe({
      error: () => console.log('error'),
      complete: () => console.log('delete complete') 
    });
  }
}
