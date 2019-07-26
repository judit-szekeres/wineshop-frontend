import { Injectable } from '@angular/core';
import { FilterSettings } from '../interfaces/filter-settings';

@Injectable({
  providedIn: 'root'
})
export class EmptyFilterSettingsService {

  constructor() { }

  emptyObject(){
    const filterSettings: FilterSettings= {
      name: '',
      category: null,
      minPrice: null,
      maxPrice: null,
      onSale: null,
      winery:  '',
      region:  '',
      country:  '',
      yearFrom: null,
      yearTo: null,
      offset: null
    }

    return filterSettings;
  }

}
