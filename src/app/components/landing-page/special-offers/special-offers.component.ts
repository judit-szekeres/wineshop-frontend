import { Component, OnInit } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { SpecialOfferService } from 'src/app/services/special-offer.service';

@Component({
  selector: 'landing-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

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
