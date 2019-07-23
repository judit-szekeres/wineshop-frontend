export enum Category {
  WHITE='WHITE',
  RED='RED'
}

export interface FilterSettings {
  name?: string;
  category?: Category;
  minPrice?: number;
  maxPrice?: number;
  onSale?: boolean;
  winery?: string;
  region?: string;
  country?: string;
  yearFrom?: number;
  yearTo?: number;
}
