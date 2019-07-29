import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service'

@Component({
  selector: "app-cart-text",
  templateUrl: "./cart-text.component.html",
  styleUrls: ["./cart-text.component.css"]
})
export class CartTextComponent implements OnInit {
  totalSubprice: number;
  shippingPrice = 15;
  taxPrice = 10;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  sum(): number {
    length = this.cartService.addedProduct.length;
    this.totalSubprice = 0;
    for (let index = 0; index < length; index++) {
      this.totalSubprice +=
        this.cartService.addedProduct[index].salePrice *
        this.cartService.addedProduct[index].quantity;
    }
    return this.totalSubprice;
  }

  totalCost(): number {
    return this.sum() + this.shippingPrice + this.taxPrice;
  }
}
