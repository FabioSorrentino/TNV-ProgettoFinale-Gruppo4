import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  stringProva: string [] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    //let credentials = {'Authorization': btoa(Object.values(loginForm.value).toString().replace(',',':'))};
    let credentials = 'Basic ' + btoa('admin:1234');//{'Authorization': btoa('admin:1234')};
    let header = {'Authorization': credentials}
    this.httpClient.get<boolean>('http://localhost:8080/login', {headers: header}).subscribe({
      next: (res) => console.log(res),
      error: () => console.log()
    });

    this.httpClient.get<boolean>('http://localhost:8080/user', {headers: header}).subscribe({
      next: (res) => console.log(res),
      error: () => console.log()
    });

    this.httpClient.get<boolean>('http://localhost:8080/admin', {headers: header}).subscribe({
      next: (res) => console.log(res),
      error: () => console.log()
    });
  }
}