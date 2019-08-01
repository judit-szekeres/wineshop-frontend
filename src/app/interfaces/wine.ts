export interface WineCard {
  image: string;
  id: number,
  name: string,
  price: number,
  salePrice: number,
  rating: number, //null ha nincs
  numberOfRating: number,
  quantity?: number;
  stock?: number;

}

/*
"image":"http://192.168.1.231:8080/wineimgs/14",
"id":14,
"name":"Belle Epoque",
"price":2149,
"salePrice":1935,
"rating":0.0,
"numberOfRating":0
*/
