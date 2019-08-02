import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL } from '../server-url';

@Injectable({
  providedIn: 'root'
})
export class RatingHttpService {

private readonly URL=serverURL+"/user/ratings";
  constructor(private http: HttpClient) { }

  sendProductRating(rating: number, productId:number):Promise<null>{
    var opinion:string;
    opinion="";
    return this.http.request('post', this.URL, {withCredentials:true, body: { rating: rating, review: opinion, wineId:productId}})
    .toPromise() as Promise<null>;
  }
}
