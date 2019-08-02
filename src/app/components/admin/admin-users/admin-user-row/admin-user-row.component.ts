import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-user-row',
  templateUrl: './admin-user-row.component.html',
  styleUrls: ['./admin-user-row.component.css']
})
export class AdminUserRowComponent implements OnInit {

@Input()
users: Users;
@Output()
refresh: EventEmitter<Users> = new EventEmitter();

constructor(
    private userService: UsersService

) { }

  ngOnInit() {
  }

















}
