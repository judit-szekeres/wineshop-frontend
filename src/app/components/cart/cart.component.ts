import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import { WineCard } from "../../interfaces/wine";
import { CartElement } from "../../interfaces/cart-element";
import {CartHTTPService} from '../../services/cart-http.service';


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  choosenProducts: CartElement[];
  refreshedProducts: CartElement[];

  constructor(
    public service: CartService,
    public cartConnectionService:CartHTTPService
  ) {
    this.choosenProducts = [];
  }

  ngOnInit() {
    //this.refreshCartFromService();


    this.cartConnectionService.getCartElementsFromServer().then(cartElements=>{
      this.choosenProducts=cartElements;
      this.service.addedProduct=cartElements;
    });

  }


  refreshCartTable(refreshedProducts: CartElement[]): void {
    this.choosenProducts = refreshedProducts;
  }


  refreshCartFromService(): void {
    this.choosenProducts = this.service.addedProduct;
  }

  /*
  udpateQuantity(c: WineCard) {
    // TODO: input mezők letiltása
    // szerver POST
    // input mezők engedélyezése
  }
  */
}
