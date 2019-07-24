import { Injectable } from '@angular/core';
import { WineCardResults } from '../interfaces/wine-dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilterSettings, Category } from '../interfaces/filter-settings';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  private readonly URL = 'http://192.168.1.231:8080/wines';
  wineCardResults: WineCardResults;

  constructor(private http: HttpClient) { }

  private transformWineCardResultsDTO(serverData: WineCardResults): WineCardResults {
    return serverData;
  }

  getWines(filterSettings?: FilterSettings): Promise<WineCardResults> {

    filterSettings = {
      category: Category.RED,
      name: 'do',
      minPrice: 1000
    }

    let params = JSON.parse(JSON.stringify(filterSettings));
    /*
    if (filterSettings) {
      //var params = new HttpParams({fromObject: filterSettings});
      //var params = new HttpParams({ fromObject: data });
      //params = params.append('category', 'RED');

      for (const filterKey of Object.keys(filterSettings)) {
        params[filterKey] = filterSettings[filterKey];
      }
    }
    */
    //const params={category: Category.RED ,name: 'do', minPrice: '1000'};

    //return this.http.request('get', this.URL, { withCredentials: true, body: {category:'RED'} })
    //return this.http.request('get', this.URL, { withCredentials: true, body: data })
    //return this.http.request('get', this.URL, { withCredentials: true, body: { params: params } })
    //return this.http.get(this.URL, {params: JSON.stringify(filterSettings), withCredentials: true} )
    //return this.http.get(this.URL, { params: {category: Category.RED ,name: 'do', minPrice: '1000'}, withCredentials: true })
    //return this.http.get(this.URL, { params: params, withCredentials: true })
    //return this.http.get(this.URL, { withCredentials: true })
    return this.http.get(this.URL, { params: params, withCredentials: true })
      .toPromise()
      .then(this.transformWineCardResultsDTO);
  }

}
