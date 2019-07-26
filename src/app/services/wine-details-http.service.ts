import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WineDetails } from '../interfaces/wine-details';
import { serverURL } from '../server-url';

@Injectable({
  providedIn: 'root'
})
export class WineDetailsHttpService {

  private readonly URL = serverURL + "/wines/";
  wineDetails: WineDetails;

  constructor(private http: HttpClient) { }

  private transformWineCardResultsDTO(serverData: WineDetails): WineDetails {
    return serverData;
  }

  getWine(id: number): Promise<WineDetails> {

    return this.http.get(this.URL + id, { withCredentials: true })
      .toPromise()
      .then(this.transformWineCardResultsDTO);
  }


}
