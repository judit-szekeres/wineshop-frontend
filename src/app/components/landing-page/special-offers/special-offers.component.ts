import { Component, OnInit, ViewChild } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { SpecialOfferService } from 'src/app/services/special-offer.service';
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "../../../../app/app.module";
import { environment } from "../../../../environments/environment";
import { CarouselComponent } from 'ngx-carousel-lib/public_api';


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

  @ViewChild('topCarousel', { static: true }) topCarousel: CarouselComponent;
  public moreSlides = 2;

  ngOnInit() {
    this.specialOfferService.getWines().then(wineCards => {
      this.wineCards = wineCards;
    });
  }

  getWineCards() {

  };

  prev() {
    this.topCarousel.slidePrev();
  }
  next() {
    this.topCarousel.slideNext();
  }

}
