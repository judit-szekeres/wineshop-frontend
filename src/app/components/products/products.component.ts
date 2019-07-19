import { Component, OnInit } from '@angular/core';
import { SpecialOfferService } from 'src/app/services/special-offer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  wineCards: WineCard[];

  constructor(private specialOfferService: SpecialOfferService) {

    this.wineCards = [];

  }

  ngOnInit() {
    this.specialOfferService.getWines().then(wineCards => {
      this.wineCards = wineCards;
    });
  }

  getWineCards() {

  };

}
