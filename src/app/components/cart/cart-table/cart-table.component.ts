import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { WineCard } from "../../../interfaces/wine";
import { CartService } from "../../../services/cart.service";
import { CartHTTPService } from "../../../services/cart-http.service";
import {CartElement}from "../../../interfaces/cart-element";

@Component({
  selector: "app-cart-table",
  templateUrl: "./cart-table.component.html",
  styleUrls: ["./cart-table.component.css"]
})
export class CartTableComponent implements OnInit {
  @Input()
  choosenProduct: CartElement;
  @Output()
  updateQuantity: EventEmitter<null> = new EventEmitter();
  @Output()
  deleted: EventEmitter<null> = new EventEmitter();

  public flag=0;
  constructor(
    public selectedProducts: CartService,
    private cartConnectionService: CartHTTPService
  ) { }

  ngOnInit() { }


  changeQuantity(): void {

    this.cartConnectionService.changeCartElementsQuantityOnServer(this.choosenProduct.id,this.choosenProduct.quantity)
    .then(() => {
      this.flag=0;
      this.cartConnectionService.getCartElementsFromServer().then(cartElements=>{
        this.selectedProducts.addedProduct=cartElements;
      });
    })
    .catch(()=>{
      this.flag=1;
      this.cartConnectionService.getCartElementsFromServer().then(cartElements=>{
        this.selectedProducts.addedProduct=cartElements;
      });
    })

  }


  //delete without server connection
  /*
  delete(): void {
    this.deleted.emit(
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
