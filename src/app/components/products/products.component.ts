import { Component, OnInit, ApplicationRef } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { ActivatedRoute } from '@angular/router';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { FilterSettings, Category } from 'src/app/interfaces/filter-settings';
import { EmptyFilterSettingsService } from 'src/app/services/empty-filter-settings.service';
import { SortingType } from 'src/app/interfaces/sorting-types';
import { KeyValue } from '@angular/common';
import { SortingTypePipe } from 'src/app/pipes/sorting-type';


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
    selectedIndex: number;
    sortingTypes: KeyValue<string, string>[] = [];
    selectedSortingType: string = "NAME_A";


    constructor(private productHttpService: ProductHttpService, private route: ActivatedRoute,
        private emptyFilterSettingsService: EmptyFilterSettingsService, private appRef: ApplicationRef) {
        this.wineCards = [];
        this.filterSettings = {};
        this.firstPageInBlock = 1;
        this.selectedIndex=0;

        for (const key of Object.keys(SortingType)) {
            this.sortingTypes.push({ key: key, value: SortingType[key] });
        }
    }

    ngOnInit() {
        this.selectedSortingType = this.selectedSortingType;
        this.filterSettings = this.emptyFilterSettingsService.emptyObject();
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
        this.firstPageInBlock = 0;
        this.selectedIndex=1;
        this.appRef.tick();
        this.firstPageInBlock = 1;
        this.selectedIndex=0;
        if (filterSettings) {
            filterSettings.offset = undefined;
        }
        this.refresh(filterSettings);
    }

    //Refresh only a certain page => for pagination
    refreshPage(pageNumber: number) {
        this.filterSettings.offset = pageNumber;
        this.refresh(this.filterSettings);
    }

    refresh(filterSettings?: FilterSettings) {
        if (filterSettings) {
            this.filterSettings = filterSettings;
        }
        let t=new SortingTypePipe;
        this.filterSettings.order = t.transform(this.selectedSortingType);
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
