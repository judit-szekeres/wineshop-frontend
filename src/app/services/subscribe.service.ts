import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscribe } from '../interfaces/subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  send(data: Subscribe): Promise<null> {
    return this.http.post<null>('https://wineshop-server.herokuapp.com/subscribe', data, { withCredentials: true }).toPromise();
  }
}
