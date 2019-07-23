import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly URL = 'http://192.168.1.131:8080';
  currentUser : User;

  constructor(private http: HttpClient) {
      this.currentUser = {
          id : null,
          email : '',
          isValidated : null,
      }
  }

  addUser(user: User): Promise<User> {
    return this.http.post(this.URL + '/registration', user , { withCredentials: true })
      .toPromise() as Promise<User>;
  }

  loginUser(user: User): Promise<User> {
      const formData = new FormData();
      formData.append('username', user.email);
      formData.append('password', user.password);
      return this.http.post(this.URL + '/login', formData , { withCredentials: true })
      .toPromise().then(u => this.currentUser = u as User) as Promise<User>;
  }

  getCurrentUser(): Observable<User> {
      if (this.currentUser.id !== null) {
          console.log('már van');
          return of(this.currentUser);
      } else {
          console.log('még nincs');
          let o = this.http.get(this.URL + '/user', { withCredentials: true });
          o.subscribe(u => this.currentUser = u as User, () => {});
          return o as Observable<User>;
      }
  }

  isUserLoggedIn(): Observable<boolean> {
      if (this.currentUser.id !== null) {
          return of(true);
      } else {
          let o = this.http.get(this.URL + '/user', { withCredentials: true });
          o.subscribe(u => this.currentUser = u as User, () => {})
          return o.pipe(map( u => !! (u as User).id ));
      }
  }

    validateUser(token: string): Promise<null> {
      return this.http.get(this.URL + '/validation?token=' + token, { withCredentials: true })
        .toPromise() as Promise<null>;
    }
}
