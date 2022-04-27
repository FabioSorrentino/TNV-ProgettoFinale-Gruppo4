import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoggedIn = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private backendAPIService: BackendApiService, private tokenStorageService: TokenStorageService) {

  }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  signup(signupForm: NgForm){
    this.backendAPIService.signup(signupForm).subscribe({
      next: (res) => {
        console.log(res.valueOf)
        this.tokenStorageService.saveToken(res);
        this.tokenStorageService.saveUser(res);
        this.isLoggedIn = true;
        this.isSuccessful = true;
      },
      error: (err) => {
        this.isSignUpFailed = true;
        this.errorMessage = err.error.errorMessage;
      }
    });
  }
}
