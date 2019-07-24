import { Component, OnInit, ViewChild } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { SpecialOfferService } from 'src/app/services/special-offer.service';
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "../../../../app/app.module";
import { environment } from "../../../../environments/environment";
import { CarouselComponent } from 'ngx-carousel-lib/public_api';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { FilterSettings } from 'src/app/interfaces/filter-settings';


@Component({
  selector: 'landing-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

  wineCards: WineCard[];
  public moreSlides = 4;
  @ViewChild('topCarousel', { static: true })
  topCarousel: CarouselComponent;
  filterSettings: FilterSettings;

  constructor(private productHttpService: ProductHttpService) {

    this.wineCards = [];
    this.filterSettings = {onSale: true};

  }
  ngOnInit() {
    this.productHttpService.getWines(this.filterSettings).then(wineCardResults => {
      this.wineCards = wineCardResults.wines;
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
