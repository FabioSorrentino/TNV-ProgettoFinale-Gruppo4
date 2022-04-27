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
        this.tokenStorageService.saveToken(res);
        this.tokenStorageService.saveUser(res);
        this.isLoggedIn = true;
      },
      error: () => console.log()
    });
  }
}
