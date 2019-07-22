import { Injectable } from "@angular/core";
import { WineCard } from "../interfaces/wine";

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
        numberOfRating: 1
      },
      {
        image: "",
        id: 2,
        name: "Dankó",
        price: 1000,
        salePrice: 2000,
        rating: 666,
        numberOfRating: 1
      }
    ];
  }
}
