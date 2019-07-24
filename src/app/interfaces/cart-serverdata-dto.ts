import{CartServerData} from './cart-serverdata';

export interface CartServerDataDTO{
  success:boolean;
  productsInCart:CartServerData[];
}
