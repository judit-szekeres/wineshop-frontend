export interface WineDetails {
  id: number,
  img: string, //url
  name: string,
  volume: number, // double
  stock: number,
  price: number,
  salePrice: number,
  rating: number, // double
  numberOfRating: number,
  ratings: [
    {
      rating: number,
      review: string,
      user: string
    },
    {
      rating: number,
      review: string,
      user: string
    }
  ],
  wineType: {
    id: number,
    name: string,
    taste: string,
    reductive: boolean,
    category: string
  },
  winery: {
    id: number,
    name: string,
    region: {
      name: string,
      Country: {
        id: number,
        name: string
      }
    }
  },
  alcoholRating: number, // double
  year: number,
}
