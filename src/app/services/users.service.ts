import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers() {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }
/*
  send(users: Users): Promise<null> {
    return this.http.get<null>('https://wineshop-server.herokuapp.com/mail', users, { withCredentials: true }).toPromise();
  }*/
}
