import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: Users;
  isLoading: boolean;


  constructor(private usersService: UsersService) {
    this.users = {
      firstName: '',
      lastName: '',
      email: ''
  };
    this.isLoading = true;

  }

  ngOnInit() {
      /*this.usersService.getUsers().then(users => {
          this.users = users;
          this.isLoading = false;
      });*/
  }


}
