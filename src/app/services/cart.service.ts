import { Injectable } from "@angular/core";
import { WineCard } from "../interfaces/wine";
import {CartElement} from "../interfaces/cart-element";


@Injectable({
  providedIn: "root"
})
export class CartService {
  public addedProduct: WineCard[];


  constructor() {
    this.addedProduct = [
      {
        image: "",
        id: 1,
        name: "La Fiesta",
        price: 2000,
        salePrice: 2000,
        rating: 666,
        numberOfRating: 1,
        quantity: 2
      },
      {
        image: "",
        id: 2,
        name: "Dankó",
        price: 1000,
        salePrice: 2000,
        rating: 666,
        numberOfRating: 1,
        quantity: 4
      },
      {
        image: "",
        id: 3,
        name: "Irsai Olivér",
        price: 1500,
        salePrice: 2000,
        rating: 666,
        numberOfRating: 1,
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
