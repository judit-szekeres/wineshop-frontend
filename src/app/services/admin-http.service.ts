import { Injectable } from '@angular/core';
import { WineByAdmin } from '../interfaces/admin-wine';
import { serverURL } from '../server-url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

    wineByAdmin: WineByAdmin;

  constructor(private http: HttpClient) {

      this.wineByAdmin = {
          name: '',
          volume: null,
          stock: null,
          price: null,
          salePrice: null,
          wineTypeId: null,
          wineryId: null,
          alcoholRating: null,
          year: null
      }
  }

 addNewWine(wine: WineByAdmin):Promise<null> {
     console.log(wine);
     return this.http
         .post(serverURL + "/admin/wine", wine, { withCredentials: true })
         .toPromise() as Promise<null>;

 }

modifyWine(wine: WineByAdmin, wineId: number):Promise<null> {
    return this.http
        .put(serverURL + "/admin/wine/"+ wineId, wine, { withCredentials: true })
        .toPromise() as Promise<null>;
}

}
