import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../interfaces/filter-settings';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category): string {
    let cat:string;

    switch(value){
      case Category.RED: cat='Red';break;
      case Category.WHITE: cat='White';break;
    }

    return cat;
  }

}
