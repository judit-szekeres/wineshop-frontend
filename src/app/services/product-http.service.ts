import { Injectable } from '@angular/core';
import { WineCardResults } from '../interfaces/wine-dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilterSettings } from '../interfaces/filter-settings';

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

    //let data: TestInterface;
    let data = {
      f1: 'a',
      f2: 'b'
    };

    if (filterSettings) {
      //var params = new HttpParams({fromObject: filterSettings});
      var params = new HttpParams({ fromObject: data });
      //params = params.append('category', 'RED');
    }
    return this.http.get(this.URL, { params: params, withCredentials: true })
      //return this.http.post(this.URL,params, { withCredentials: true })
      .toPromise()
      .then(this.transformWineCardResultsDTO);
  }

}
