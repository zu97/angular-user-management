import { Component } from '@angular/core';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(public storeService: StoreService) {}
}
