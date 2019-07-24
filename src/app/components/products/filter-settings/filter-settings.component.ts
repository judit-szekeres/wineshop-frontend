import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterSettings } from 'src/app/interfaces/filter-settings';
import { KeyValue } from '@angular/common';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filter-settings',
  templateUrl: './filter-settings.component.html',
  styleUrls: ['./filter-settings.component.css']
})
export class FilterSettingsComponent implements OnInit {

  @Output()
  refresh: EventEmitter<FilterSettings> = new EventEmitter();

  filterSettings: FilterSettings;
  categories: KeyValue<string,string>[];

  constructor(private categoryService:CategoryService) {
    this.filterSettings={
      name: '',
      category: null,
      minPrice: null,
      maxPrice: null,
      onSale: null,
      winery:  '',
      region:  '',
      country:  '',
      yearFrom: null,
      yearTo: null
    }
    this.categories=this.categoryService.getCategoryArray();
  }

  ngOnInit() {
  }

  updateFilter(){
    this.refresh.emit(this.filterSettings);
  }

}
