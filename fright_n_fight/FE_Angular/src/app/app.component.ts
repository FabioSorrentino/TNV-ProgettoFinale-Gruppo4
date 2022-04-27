import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fright_n_fight';

  loggedInUser: User|null = {} as User;
  isLoggedIn = false;
}
