import{CartElement} from './cart-element';

export interface CartServerDataDTO{
  success:boolean;
  productsInCart:CartElement[];
}
