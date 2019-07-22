import { Injectable } from '@angular/core';
import { WineCard } from '../interfaces/wine';
import { WineCardDTO } from '../interfaces/wine-dto';
import { WineCardError } from '../errors/wine-card-error';

@Injectable({
  providedIn: 'root'
})
export class SpecialOfferService {

  wineCards: WineCard[];

  constructor() { }

  private transformWineCardDTO(serverData: WineCardDTO): WineCard[] {
    if (!serverData.success) {
      throw new WineCardError(serverData['error-infos']);
    }
    return serverData.wineCards;
  }

  getWines(): Promise<WineCard[]> {   //for testing
    this.wineCards = [

      {
        image: "https://cdn.pixabay.com/photo/2013/07/12/16/28/bordeaux-150955_960_720.png",
        id: 1,
        name: "Nagyon Finom",
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

    ];
    let p = new Promise<WineCard[]>((resolve) => {
      resolve(this.wineCards);
    });
    return p;

  }


}
