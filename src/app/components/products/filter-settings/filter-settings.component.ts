import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterSettings } from 'src/app/interfaces/filter-settings';
import { KeyValue } from '@angular/common';
import { CategoryService } from 'src/app/services/category.service';
import { EmptyFilterSettingsService } from 'src/app/services/empty-filter-settings.service';

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

  constructor(private categoryService:CategoryService, emptyFilterSettingsService:EmptyFilterSettingsService) {
    this.filterSettings=emptyFilterSettingsService.emptyObject();
    this.categories=this.categoryService.getCategoryArray();
  }

  ngOnInit() {
  }

  updateFilter(){
    this.refresh.emit(this.filterSettings);
  }

}
