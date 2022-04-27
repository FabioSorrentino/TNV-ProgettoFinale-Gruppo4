import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/service/backend-api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loggedInUser: User = {} as User;
  isLoggedIn = false;

  constructor(private backendAPIService: BackendApiService) {

  }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm){
    this.backendAPIService.signup(signupForm).subscribe({
      next: (res) => {
        this.loggedInUser.id = res;
        this.isLoggedIn = true;
      },
      error: () => console.log()
    });
    console.log(this.loggedInUser.id);
  }
}
