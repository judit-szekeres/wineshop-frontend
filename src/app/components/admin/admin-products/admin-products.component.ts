import { Component, OnInit } from '@angular/core';
import { FilterSettings } from 'src/app/interfaces/filter-settings';
import { EmptyFilterSettingsService } from 'src/app/services/empty-filter-settings.service';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { WineCard } from 'src/app/interfaces/wine';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  pageCount: number;



  wineCards: WineCard[];
  filterSettings: FilterSettings;
  currentPage: number;
  firstPageInBlock: number;


  constructor(private productHttpService: ProductHttpService, private emptyFilterSettingsService: EmptyFilterSettingsService) {
      this.wineCards = [];
      this.filterSettings = {};
      this.firstPageInBlock=1;
  }

  ngOnInit() {
    this.refresh();
  }

  //Refresh whole list, set current page to 1th page => for filter
  refreshWholeList(filterSettings?: FilterSettings) {
      this.firstPageInBlock=1;
      filterSettings.offset=undefined;
      this.refresh(filterSettings);
  }

  //Refresh only a certain page => for pagination
  refreshPage(pageNumber: number) {
      if (!this.filterSettings) {
          this.filterSettings = this.emptyFilterSettingsService.emptyObject();
      }
      this.filterSettings.offset = pageNumber;
      this.refresh(this.filterSettings);
  }

  refresh(filterSettings?: FilterSettings) {
      this.filterSettings = filterSettings;
      let p = this.productHttpService.getWines(this.cleanedFilter(this.filterSettings));
      p.then(wineCardResults => {
          this.wineCards = wineCardResults.wines;
          this.pageCount = wineCardResults.numberOfPage;
      });
  };

  cleanedFilter(filterSettings?: FilterSettings) {
      if (filterSettings) {
          for (let key of Object.keys(filterSettings)) {
              if (!filterSettings[key]) {
                  filterSettings[key] = undefined;
              }
          }
      }
      return filterSettings;
  }

}
