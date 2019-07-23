import { Component, OnInit } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { WineCardResults } from 'src/app/interfaces/wine-dto';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  wineCardResults:WineCardResults;
  wineCards: WineCard[];

  constructor(private productHttpService: ProductHttpService, private route: ActivatedRoute) {
    this.wineCards = [];
  }

  ngOnInit() {
      let category: string = this.route.snapshot.paramMap.get('category');
      if (category == null) {
        this.refresh();
      }
  }

  refresh() {
    this.productHttpService.getWines().then(wineCardResults => {
      console.log(wineCardResults);
      this.wineCardResults = wineCardResults;
      this.wineCards=wineCardResults.wines;
    });
  };

}
