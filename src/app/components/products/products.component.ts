import { Component, OnInit } from '@angular/core';
import { SpecialOfferService } from 'src/app/services/special-offer.service';
import { WineCard } from 'src/app/interfaces/wine';

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
      let id:number=this.route.snapshot.paramMap.get('category');
      this.wineCards = wineCards;
    });
  }

  getWineCards() {

  };

}
