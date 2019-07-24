import { Component, OnInit, Input } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { WineDataModalComponent } from '../wine-data-modal/wine-data-modal.component';

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

  constructor() {
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

}
