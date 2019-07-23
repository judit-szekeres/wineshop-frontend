export interface WineCard {

  image: string;
  id: number,
  name: string,
  price: number,
  salePrice: number,
  rating: number, //null ha nincs
  numberOfRating: number,
  quantity?: number;

}
