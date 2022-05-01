import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  public isLoggedIn: boolean = false;
  user_id: number | null = null;

  constructor(public tokenStorageService: TokenStorageService) {}

  ngOnInit() {
    this.user_id= this.tokenStorageService.getUserId();
    if (this.user_id != null){
      this.isLoggedIn = true;
    }
  }

}
