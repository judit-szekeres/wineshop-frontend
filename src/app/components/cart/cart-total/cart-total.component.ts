import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "../../../services/cart.service";
import {RatingModalService} from "../../../services/rating-modal.service";

@Component({
  selector: "app-cart-total",
  templateUrl: "./cart-total.component.html",
  styleUrls: ["./cart-total.component.css"]
})
export class CartTotalComponent implements OnInit {
  totalSubprice: number;
  shippingPrice = 0;
  taxPrice = 0;

  constructor(public cartService: CartService, public modalService:RatingModalService) {
  }
  ngOnInit() {}

  sum(): number {
    length = this.cartService.addedProduct.length;
    this.totalSubprice = 0;
    for (let index = 0; index < length; index++) {
      this.totalSubprice +=
        (this.cartService.addedProduct[index].salePrice) *
        (this.cartService.addedProduct[index].quantity);
    }
    return this.totalSubprice;
  }

  totalCost(): number {
    return this.sum() + this.shippingPrice + this.taxPrice;
  }

  setFlag():boolean{

    return this.modalService.isModalOpen=true;

  }


}
