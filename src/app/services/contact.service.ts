import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { HttpClient } from '@angular/common/http';
/*import { serverURL } from '../server-url';*/

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  send(data: Contact): Promise<null> {
    return this.http.post<null>('https://wineshop-server.herokuapp.com/mail', data, { withCredentials: true }).toPromise();
  }
}
