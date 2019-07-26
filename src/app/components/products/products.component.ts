import { Component, OnInit } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { ActivatedRoute } from '@angular/router';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { FilterSettings, Category } from 'src/app/interfaces/filter-settings';
import { PageButton } from 'src/app/interfaces/page-button';


const pageButtonsCount:number=5;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  wineCards: WineCard[];
  filterSettings: FilterSettings;
  pageButtons: PageButton[];
  currentPage: number;

  constructor(private productHttpService: ProductHttpService, private route: ActivatedRoute) {
    this.pageButtons=[];
    for (let i = 0; i < pageButtonsCount; i++) {
        this.pageButtons[i]={
          nr:i+1,
          active:false
        }
    }
    this.pageButtons[3].active=true;
    console.log("test1");
    console.log(this.pageButtons);
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
    this.productHttpService.getWines(this.cleanedFilter(this.filterSettings)).then(wineCardResults => {
      this.wineCards = wineCardResults.wines;

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

  refreshPage(pageNumber: number) {
    this.filterSettings.offset=pageNumber;
    this.refresh(this.filterSettings);
  }

}
