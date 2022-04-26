import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  adduser(addUserForm: NgForm){
    this.httpClient.post<number>('http://localhost:8080/adduser', addUserForm.value).subscribe({
      next: (res) => console.log(res),
      error: () => console.log()
    });
  }
}
