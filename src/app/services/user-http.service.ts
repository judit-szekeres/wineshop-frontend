import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserDTO } from '../interfaces/user';
import { UserError } from '../errors/user-error';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private readonly URL = 'http://192.168.1.232:8080/registration';

  constructor(private http: HttpClient) { }

  private transformsUserDTO(serverData: UserDTO): User {
    if (!serverData.success) {
      throw new UserError(serverData['error-infos']);
    }
    return serverData.user;
  }

  addUser(user: User): Promise<User> {
    return this.http.post(this.URL, { user }, { withCredentials: true })
      .toPromise().then(this.transformsUserDTO);
  }
}
