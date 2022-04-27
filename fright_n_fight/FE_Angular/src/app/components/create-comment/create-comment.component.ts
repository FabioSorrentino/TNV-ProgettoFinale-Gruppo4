import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CommentiComponent implements OnInit {

  
  constructor (private backendAPIService: BackendApiService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    console.log(this.tokenStorageService.getUser());
  }

  createComment(comment: NgForm) {
    this.backendAPIService.createComment(comment.value).subscribe({ 
    next: () => console.log('comment created'),
    error: () => console.log('error')
  });
  }
}
