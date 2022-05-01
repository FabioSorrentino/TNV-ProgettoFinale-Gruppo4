import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/comments';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CommentiComponent implements OnInit {

  movieId: number | null = 770;
  userId: number | null = null;
  
  constructor (private backendAPIService: BackendApiService, public tokenStorageService: TokenStorageService,
  private activatedRoute: ActivatedRoute, public movieAPIService: MovieApiService) {
   }

  ngOnInit(): void {
    this.userId = this.tokenStorageService.getUserId()
    }
  
/*
  createComment(comment: NgForm) {
    let firstComment: Partial<Comments> ={user_id: this.userId, movie_id: this.movieId, comment: comment.value.comment};
    this.backendAPIService.createComment(firstComment).subscribe({ 
    next: () => console.log('comment created'),
    error: () => console.log('error')
  });
  }*/
}
