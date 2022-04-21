import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {

  commentId: number;
  constructor(private httpClient: HttpClient, activatedRoute: ActivatedRoute) {
    this.commentId = +activatedRoute.snapshot.params['commentId'];
   }

  
  ngOnInit(): void {
    this.deleteComment()
  }

  deleteComment() {
    this.httpClient.delete<Comments>(`http://localhost:5161/comments/delete/${this.commentId}`)
    .subscribe({
      error: () => console.log('error'),
      complete: () => console.log('list comments') 
    });
  }
}
