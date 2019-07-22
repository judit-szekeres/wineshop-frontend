import { Injectable } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Category } from '../interfaces/filter-settings';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategoryArray():KeyValue<string,string>[]{
    const categoryValues: KeyValue<string,string>[]=[];
    for(const categoryKey of Object.keys(Category)){
      categoryValues.push({key: categoryKey,value: Category[categoryKey]});
    }
    return categoryValues;
  }
}
