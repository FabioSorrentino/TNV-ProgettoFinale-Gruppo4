import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    let credentials = 'Basic ' + btoa(Object.values(loginForm.value).toString().replace(',',':'));
    let header = {'Authorization': credentials}
    this.httpClient.get<number>('http://localhost:8080/login', {headers: header}).subscribe({
      next: (res) => console.log(res),
      error: () => console.log()
    });
  }
}