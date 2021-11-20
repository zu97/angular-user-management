import { Component } from '@angular/core';
import { StoreService } from '../shared/store.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  name = '';
  email = '';
  role = '';
  isActive = false;

  constructor(public store: StoreService) {}

  addUser() {
    const newUser = new User(this.name, this.email, this.role, this.isActive)
    this.store.users.push(newUser);

    console.log(this.store.users.length);
  }
}
