import { Component, OnInit, Input } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

    @Input()
    wineCard: WineCard;

  constructor() { }

  ngOnInit() {
  }

}
