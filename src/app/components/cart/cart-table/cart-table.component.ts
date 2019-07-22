import { Component, OnInit,Input } from "@angular/core";
import { WineCard } from "../../../interfaces/wine";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: "app-cart-table",
  templateUrl: "./cart-table.component.html",
  styleUrls: ["./cart-table.component.css"]
})
export class CartTableComponent implements OnInit {
  

  @Input()
  choosenProduct:WineCard;


  constructor(public selectedProducts: CartService) {}

  ngOnInit() {}





  delete(): void {
    this.selectedProducts.addedProduct[0].name = this.selectedProducts.addedProduct[1].name;
  }
}
