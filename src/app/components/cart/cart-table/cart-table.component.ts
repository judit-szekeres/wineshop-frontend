import { Component,EventEmitter, OnInit,Input,Output } from "@angular/core";
import { WineCard } from "../../../interfaces/wine";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: "app-cart-table",
  templateUrl: "./cart-table.component.html",
  styleUrls: ["./cart-table.component.css"]
})
export class CartTableComponent implements OnInit {
  @Input()
  choosenProduct: WineCard;
  @Output()
  refresh: EventEmitter<WineCard[]> = new EventEmitter();
  @Output()
  updateQuantity: EventEmitter<null> = new EventEmitter();

  constructor(public selectedProducts: CartService) {}

  ngOnInit() {}

  changeQuantity(): void {
    this.updateQuantity.emit();
  }

  delete(): void {
    this.refresh.emit(
      this.selectedProducts.deleteProductFromCart(this.choosenProduct.id)
    );
  }
}
