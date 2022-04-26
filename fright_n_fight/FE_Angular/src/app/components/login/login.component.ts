import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/backend-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedinUser: User = {} as User;

  constructor(activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService) {
    this.loggedinUser.id = activatedRoute.snapshot.params['user_id'];
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    let credentials = 'Basic ' + btoa(Object.values(loginForm.value).toString().replace(',',':'));
    let header = {
      'Authorization': credentials
    }
    this.backendAPIService.login(header).subscribe({
      next: (res) => {
        this.loggedinUser.id = res.id;
        this.loggedinUser.username = res.username;
      },
      error: () => console.log(),
    });
  }
}