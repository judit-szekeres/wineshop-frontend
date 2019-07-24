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

    let params: HttpParams | { [param: string]: string | string[]; };
    if(filterSettings){
      params = JSON.parse(JSON.stringify(filterSettings));
    }

    return this.http.get(this.URL, { params: params, withCredentials: true })
      .toPromise()
      .then(this.transformWineCardResultsDTO);
  }

}
