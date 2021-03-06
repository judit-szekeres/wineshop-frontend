import { Injectable } from '@angular/core';
import { WineCardResults } from '../interfaces/wine-dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilterSettings } from '../interfaces/filter-settings';
import { serverURL } from '../server-url';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  private readonly URL = serverURL + "/wines";
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

    console.log("http request");
    console.log(params);

    return this.http.get(serverURL + "/wines", { params: params, withCredentials: true })
      .toPromise()
      .then(this.transformWineCardResultsDTO);
  }

}
