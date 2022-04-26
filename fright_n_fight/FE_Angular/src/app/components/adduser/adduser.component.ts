import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/service/backend-api.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  loggedinUser: User = {} as User;

  constructor(activatedRoute: ActivatedRoute, private backendAPIService: BackendApiService) {
    this.loggedinUser.id = activatedRoute.snapshot.params['user_id'];
  }

  ngOnInit(): void {
  }

  adduser(addUserForm: NgForm){
    this.backendAPIService.addUser(addUserForm.value).subscribe({
      next: (res) => console.log(res),
      error: () => console.log()
    });
  }
}
