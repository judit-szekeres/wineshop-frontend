import { Component, OnInit } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { ActivatedRoute } from '@angular/router';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { FilterSettings, Category } from 'src/app/interfaces/filter-settings';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  wineCards: WineCard[];
  filterSettings: FilterSettings;
  currentPage: number;

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

  refresh(filterSettings?: FilterSettings, pageNumber?: number) {
    this.filterSettings = filterSettings;
    console.log(filterSettings);
    this.productHttpService.getWines(this.cleanedFilter(this.filterSettings)).then(wineCardResults => {
      this.wineCards = wineCardResults.wines;
      console.log(this.wineCards);

      if (!pageNumber && this.wineCards.length > 0) {
        this.currentPage = 1;
      } else if (pageNumber) {
        this.currentPage = pageNumber;
      } else {
        this.currentPage = null;
      }
    });
  };

  cleanedFilter(filterSettings?: FilterSettings) {
    if (filterSettings) {
      for (let key of Object.keys(filterSettings)) {
        if (!filterSettings[key]) {
          filterSettings[key]=undefined;
        }
      }
    }
    return filterSettings;
  }

  refreshPage(page: number) {
    console.log(page);
    this.refresh(this.filterSettings, page);
  }

}
