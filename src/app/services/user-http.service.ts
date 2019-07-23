import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Usercredentials } from '../interfaces/usercredentials'

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly URL = 'http://192.168.1.231:8080';

  constructor(private http: HttpClient) { }

  addUser(user: User): Promise<User> {
    return this.http.post(this.URL + '/registration', user , { withCredentials: true })
      .toPromise() as Promise<User>;
  }

  loginUser(user: Usercredentials): Promise<null> {
    return this.http.post(this.URL + '/login', user , { withCredentials: true })
      .toPromise() as Promise<null>;
  }

    validateUser(token: string): Promise<null> {
      return this.http.get(this.URL + '/validation?token=' + token, { withCredentials: true })
        .toPromise() as Promise<null>;
    }
}
