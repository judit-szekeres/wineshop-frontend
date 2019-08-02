import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sorting-type'
})
export class SortingTypePipe implements PipeTransform {

    transform(value: string): string {
        let s: string;

        switch (value) {

            case 'NAME_A': s = 'nameA'; break;
            case 'NAME_D': s = 'nameD'; break;

            case 'PRICE_A': s = 'priceA'; break;
            case 'PRICE_D': s = 'priceD'; break;

            case 'YEAR_A': s = 'yearA'; break;
            case 'YEAR_D': s = 'yearD'; break;

            case 'RATING_A': s = 'ratingA'; break;
            case 'RATING_D': s = 'ratingD'; break;

        }

        return s;
    }

}
