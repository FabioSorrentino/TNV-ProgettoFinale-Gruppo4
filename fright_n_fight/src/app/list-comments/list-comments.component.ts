import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  comments: Comments [] = [];


  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    return this.httpClient.get<Comments[]>(`http://localhost:5161/comments`).subscribe({ 
    next: (res) => this.comments = res,
    error: () => console.log('error'),
    complete: () => console.log('list comments')
  });
  }

}
