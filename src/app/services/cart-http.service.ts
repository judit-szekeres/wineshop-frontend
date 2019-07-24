import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CartServerData} from '../interfaces/cart-serverdata';
import {CartServerDataDTO} from '../interfaces/cart-serverdata-dto';
import {CartError} from '../errors/cart-error';


@Injectable({
  providedIn: 'root'
})
export class CartHTTPService {

private readonly URL='http://192.168.1.171:8080/cart';

  constructor(private http: HttpClient) { }

  deleteCartElementFromServer(productId:number):Promise<null>{
    return this.http.request('delete', this.URL, {withCredentials:true, body: { id: productId, quantity: 0 }})
    .toPromise() as Promise<null>;
  }

  changeCartElementsQuantityOnServer(productId:number,productQuantity:number):Promise<null>{
    return this.http.request('put', this.URL, {withCredentials:true, body: { id: productId, quantity: productQuantity }})
    .toPromise() as Promise<null>;
  }



}
