export enum Category {
  WHITE='WHITE',
  RED='RED'
}

export interface PriceInterval {
  minPrice: number;
  maxPrice: number;
}

export interface YearInterval {
  yearFrom: number;
  yearTo: number;
}

export interface FilterSettings {
  name: string;
  category: Category;
  priceInterval: PriceInterval;
  onSale: boolean;
  grapeType: string;
  winery: string;
  region: string;
  country: string;
  year: YearInterval;
}
