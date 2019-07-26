import { Injectable } from "@angular/core";
import { WineCard } from "../interfaces/wine";
import {CartElement} from "../interfaces/cart-element";


@Injectable({
  providedIn: "root"
})
export class CartService {
  public addedProduct: CartElement[];


  constructor() {
    this.addedProduct = [
      {

        id: 1,
        image:"https://secure.ce-tescoassets.com/assets/HU/584/5998693565584/ShotType1_540x540.jpg",
        name: "La Fiesta",
        price: 2000,
        quantity: 2
      },
      {

        id: 2,
        image:"https://ecommercewebblob0.blob.core.windows.net/auchan/cache/product_large/product/607889/2.jpg",
        name: "Dankó",
        price: 1000,
        quantity: 4
      },
      {
        id: 3,
        image:"https://drinksmarket.cdn.shoprenter.hu/custom/drinksmarket/image/data/product/B4007056.jpg?lastmod=1549982218.1488357855",
        name: "Irsai Olivér",
        price: 1500,
        quantity: 3
      }
    ];
  }

  deleteProductFromCart(productId: number): void {

    this.addedProduct = this.addedProduct.filter( cartItem => cartItem.id != productId );

    /*
    this.newProductArray=[];
    var index: number;

    //elmentjük a törlendő elem indexét
    for (let i = 0; i < this.addedProduct.length; i++) {
      if (this.addedProduct[i].id == productId) {
        index = i;

      }
    }


    //létrehoz egy új tömböt a törölt elem nélkül


    let counter=-1;


    for (let i = 0; i <this.addedProduct.length; i++) {
      if (this.addedProduct[i].id != productId) {
          counter++;
          this.newProductArray[counter] = this.addedProduct[i];
      }
    }




    this.addedProduct=this.newProductArray;




    //visszaadja az új (törölt elem nélküli) tömböt
    return this.newProductArray;

    */

  }



}
