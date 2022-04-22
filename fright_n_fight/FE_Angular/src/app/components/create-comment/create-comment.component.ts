import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CommentiComponent implements OnInit {

  
  constructor (private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  createComment(comment: NgForm) {
    this.httpClient.post(`http://localhost:5161/comments`, comment.value).subscribe({ 
    next: () => console.log('comment created'),
    error: () => console.log('error')
  });
  }


}
