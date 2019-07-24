import { Component, OnInit } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { WineCardResults } from 'src/app/interfaces/wine-dto';
import { FilterSettings, Category } from 'src/app/interfaces/filter-settings';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  wineCardResults: WineCardResults;
  wineCards: WineCard[];
  filterSettings: FilterSettings;

  constructor(private productHttpService: ProductHttpService, private route: ActivatedRoute) {
    this.wineCards = [];
    this.filterSettings = {};
  }

  ngOnInit() {
    let category: string = this.route.snapshot.paramMap.get('category');
    if (category != null) {
      let enumCategory: Category;
      switch (category) {
        case 'red': enumCategory = Category.RED; break;
        case 'white': enumCategory = Category.WHITE; break;
      }
      this.filterSettings.category = enumCategory;
    }
    this.refresh();
  }

  refresh(filterSettings?: FilterSettings) {
    console.log("refresh");
    console.log(filterSettings);
    this.productHttpService.getWines(this.filterSettings).then(wineCardResults => {
      console.log(wineCardResults);
      this.wineCardResults = wineCardResults;
      this.wineCards = wineCardResults.wines;
    });
  };

}
