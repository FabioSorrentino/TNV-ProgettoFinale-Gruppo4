import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { BackendApiService } from 'src/app/service/backend-api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  loggedInUser: User = {} as User;
  isLoggedIn = false;

  constructor(private backendAPIService: BackendApiService) {

  }

  ngOnInit(): void {
  }

  adduser(addUserForm: NgForm){
    this.backendAPIService.addUser(addUserForm.value).subscribe({
      next: (res) => {
        this.loggedInUser.id = res.id;
        this.loggedInUser.username = res.username;
        this.isLoggedIn = true;
      },
      error: () => console.log()
    });
  }
}
