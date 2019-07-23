import { WineCard } from './wine';

export interface WineCardResultsDTO {
  success: boolean,
  wineCardsResults: WineCardResults
}

export interface WineCardResults{
  wines: WineCard[],
  numberOfPage: number
}
