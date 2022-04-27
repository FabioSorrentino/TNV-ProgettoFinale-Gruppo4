import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendApiService } from 'src/app/service/backend-api.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  constructor(private backendAPIService: BackendApiService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  login(loginForm: NgForm) {
    let credentials = 'Basic ' + btoa(Object.values(loginForm.value).toString().replace(',',':'));
    let header = {
      'Authorization': credentials
    }
    this.backendAPIService.login(header).subscribe({
      next: (res) => {
        this.tokenStorageService.saveToken(res);
        this.tokenStorageService.saveUser(res);
        this.isLoggedIn = true;
      },
      error: () => console.log()
    });
  }

  logout() {
    this.tokenStorageService.logout();
  }
}