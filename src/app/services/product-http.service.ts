import { Injectable } from '@angular/core';
import { WineCardResults, WineCardResultsDTO } from '../interfaces/wine-dto';
import { HttpClient } from '@angular/common/http';

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

  getWines(): Promise<WineCardResults> {
    return this.http.get(this.URL, { withCredentials: true })
      .toPromise()
      .then(this.transformWineCardResultsDTO);
  }

  getWines2(): Promise<WineCardResults> {   //for testing
    this.wineCardResults = {wines:[

      {
        image: "https://cdn.pixabay.com/photo/2013/07/12/16/28/bordeaux-150955_960_720.png",
        id: 1,
        name: "Nagyon Finomm",
        price: 15000,
        salePrice: 13000,
        rating: -1,
        numberOfRating: 0,
      },
      {
        image: "https://cdn.pixabay.com/photo/2013/07/12/16/28/bordeaux-150955_960_720.png",
        id: 2,
        name: "Koccintós",
        price: 500,
        salePrice: 400,
        rating: -1,
        numberOfRating: 0,
      },
      {
        image: "https://cdn.pixabay.com/photo/2013/07/12/16/28/bordeaux-150955_960_720.png",
        id: 3,
        name: "Teszt Bor",
        price: 20000,
        salePrice: 19000,
        rating: -1,
        numberOfRating: 0,
      },

    ],
    numberOfPage: 84
  };
    let p = new Promise<WineCardResults>((resolve) => {
      resolve(this.wineCardResults);
    });

    return p;
  }

}
