import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendApiService } from 'src/app/backend-api.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CommentiComponent implements OnInit {

  
  constructor (private httpClient: HttpClient, private backendAPIService: BackendApiService) { }

  ngOnInit(): void {
  }

  createComment(comment: NgForm) {
    this.backendAPIService.createComment(comment.value).subscribe({ 
    next: () => console.log('comment created'),
    error: () => console.log('error')
  });
  }


}
