import { Component, OnInit } from '@angular/core';
import { FilterSettings } from 'src/app/interfaces/filter-settings';

@Component({
  selector: 'app-filter-settings',
  templateUrl: './filter-settings.component.html',
  styleUrls: ['./filter-settings.component.css']
})
export class FilterSettingsComponent implements OnInit {

  filterSettings: FilterSettings;
  
  constructor() { }

  ngOnInit() {
  }

}
