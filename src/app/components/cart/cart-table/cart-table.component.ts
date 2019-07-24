import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { WineCard } from "../../../interfaces/wine";
import { CartService } from "../../../services/cart.service";
import { CartHTTPService } from "../../../services/cart-http.service";

@Component({
  selector: "app-cart-table",
  templateUrl: "./cart-table.component.html",
  styleUrls: ["./cart-table.component.css"]
})
export class CartTableComponent implements OnInit {
  @Input()
  choosenProduct: WineCard;
  @Output()
  updateQuantity: EventEmitter<null> = new EventEmitter();
  @Output()
  deleted: EventEmitter<null> = new EventEmitter();

  constructor(
    public selectedProducts: CartService,
    private cartConnectionService: CartHTTPService
  ) { }

  ngOnInit() { }

  changeQuantity(): void {
    this.updateQuantity.emit();
  }

  //delete without server connection
  /*
  delete(): void {
    this.refresh.emit(
      this.selectedProducts.deleteProductFromCart(this.choosenProduct.id)
    );
  }
  */


  delete(): void {
    this.cartConnectionService.deleteCartElementFromServer(this.choosenProduct.id).then(() => {
      this.selectedProducts.deleteProductFromCart(this.choosenProduct.id);
      this.deleted.emit();
    });

  }
}
