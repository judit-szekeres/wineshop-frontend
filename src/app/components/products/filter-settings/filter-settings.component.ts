import { Component, OnInit } from '@angular/core';
import { FilterSettings } from 'src/app/interfaces/filter-settings';
import { KeyValue } from '@angular/common';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filter-settings',
  templateUrl: './filter-settings.component.html',
  styleUrls: ['./filter-settings.component.css']
})
export class FilterSettingsComponent implements OnInit {

  filterSettings: FilterSettings;
  categories: KeyValue<string,string>[];

  constructor(private categoryService:CategoryService) {
    this.filterSettings={
      name: '',
      category: null,
      priceInterval: null,
      onSale: null,
      grapeType:  '',
      winery:  '',
      region:  '',
      country:  '',
      year: null
    }
    this.categories=this.categoryService.getCategoryArray();
  }

  ngOnInit() {
  }

}
