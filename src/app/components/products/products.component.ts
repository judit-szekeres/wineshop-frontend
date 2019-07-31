import { Component, OnInit } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { ActivatedRoute } from '@angular/router';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { FilterSettings, Category } from 'src/app/interfaces/filter-settings';
import { EmptyFilterSettingsService } from 'src/app/services/empty-filter-settings.service';
import { SortingType } from 'src/app/interfaces/sorting-types';
import { KeyValue } from '@angular/common';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

    pageCount: number;

    wineCards: WineCard[];
    filterSettings: FilterSettings;
    currentPage: number;
    firstPageInBlock: number;
    sortingTypes: KeyValue<string, string>[]=[];


    constructor(private productHttpService: ProductHttpService, private route: ActivatedRoute,
        private emptyFilterSettingsService: EmptyFilterSettingsService) {

        this.wineCards = [];
        this.filterSettings = {};
        this.firstPageInBlock = 1;

        for (const key of Object.keys(SortingType)) {
            this.sortingTypes.push({ key: key, value: SortingType[key] });
        }
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

    //Refresh whole list, set current page to 1th page => for filter
    refreshWholeList(filterSettings?: FilterSettings) {
        this.firstPageInBlock = 1;
        filterSettings.offset = undefined;
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
