import { Component, OnInit, Input } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { WineDataModalComponent } from '../wine-data-modal/wine-data-modal.component';
import {CartHTTPService} from '../../services/cart-http.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  wineCard: WineCard;

  @Input()
  fullWidth: boolean;

  private wineModalNeeded: boolean;

  constructor(public cartConnectionService:CartHTTPService) {
    this.wineModalNeeded = false;
  }

  ngOnInit() {
  }

  openLoginModal(): void {
    this.wineModalNeeded = true;
  }

  closeLoginModal(): void {
    this.wineModalNeeded = false;
  }

  addToCart():void{
    this.cartConnectionService.putProductToServerCart(this.wineCard.id).then(() => {
      console.log("succeeded");

    });
  }

}
