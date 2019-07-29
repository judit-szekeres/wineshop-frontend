import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CartElement} from '../interfaces/cart-element';
import {CartServerDataDTO} from '../interfaces/cart-serverdata-dto';
import {CartError} from '../errors/cart-error';
import { serverURL } from '../server-url';

@Injectable({
  providedIn: 'root'
})
export class CartHTTPService {

private readonly URL=serverURL+"/cart";

  constructor(private http: HttpClient) { }

  private transformCartElementDTO(serverData: CartServerDataDTO): CartElement[] {
      if (!serverData.success) {
          throw new CartError(serverData['error-infos']);
      }
      return serverData.productsInCart;
  }

  deleteCartElementFromServer(productId:number):Promise<null>{
    return this.http.request('delete', this.URL, {withCredentials:true, body: { id: productId, quantity: 0 }})
    .toPromise() as Promise<null>;
  }

  changeCartElementsQuantityOnServer(productId:number,productQuantity:number):Promise<null>{
    return this.http.request('put', this.URL, {withCredentials:true, body: { id: productId, quantity: productQuantity }})
    .toPromise() as Promise<null>;
  }

  //puts the chosen product to the cart on the server and sets the default quantity (1)
  putProductToServerCart(productId:number):Promise<null>{
    return this.http.request('post', this.URL, {withCredentials:true, body: { id: productId, quantity: 1 }})
    .toPromise() as Promise<null>;
  }


  getCartElementsFromServer(): Promise<CartElement[]> {
      return this.http.get(this.URL, { withCredentials: true }).toPromise() as Promise<CartElement[]>;
  }





}
