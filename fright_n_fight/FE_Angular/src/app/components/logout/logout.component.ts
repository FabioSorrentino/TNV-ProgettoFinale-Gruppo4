import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
      this.tokenStorageService.logout();
      this.router.navigate(['home']);
  }
}

/*<div *ngIf="isLoggedIn" class="text-center" style="padding:50px 0">
    <div class="login-form-1">
        <div class="main-login-form">
            <button (click)="logout()" class="login-button">Logout</button>
        </div>  
    </div>
</div>*/