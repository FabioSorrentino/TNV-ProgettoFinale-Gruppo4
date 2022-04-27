import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { BackendApiService } from 'src/app/service/backend-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedInUser: User = {} as User;
  isLoggedIn = false;

  constructor(private backendAPIService: BackendApiService) {
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    let credentials = 'Basic ' + btoa(Object.values(loginForm.value).toString().replace(',',':'));
    let header = {
      'Authorization': credentials
    }
    this.backendAPIService.login(header).subscribe({
      next: (res: User) => {
        
        this.loggedInUser.id = res.id;
        this.loggedInUser.username = res.username;
        this.isLoggedIn = true;
      },
      error: () => console.log(),
    });
  }
}