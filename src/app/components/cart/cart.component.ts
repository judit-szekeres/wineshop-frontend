import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import {CartService} from '../../services/cart.service';
import { WineCard } from "../../interfaces/wine";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {

  choosenProducts:WineCard[];
  refreshedProducts:WineCard[];

  constructor(public service:CartService) {
    this.choosenProducts=[];
  }


  ngOnInit() {
    this.choosenProducts=this.service.addedProduct;
  }

  refreshCartTable(refreshedProducts:WineCard[]):void{
    this.choosenProducts=refreshedProducts;
  }
}
