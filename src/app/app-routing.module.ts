import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpecialOffersComponent } from './components/landing-page/special-offers/special-offers.component';
import {RedWhiteCategoriesComponent} from './components/landing-page/red-white-categories/red-white-categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { PolicyComponent } from './components/footer/policy/policy.component';
import { TermOfServicesComponent } from './components/footer/term-of-services/term-of-services.component';
import { LoginRegistrationModalComponent } from './components/login-registration-modal/login-registration-modal.component';
import {CartComponent} from './components/cart/cart.component';
import { RegConfirmationPageComponent } from './components/login-registration-modal/reg-confirmation-page/reg-confirmation-page.component';
import { ValidateTokenComponent } from './components/login-registration-modal/validate-token/validate-token.component';
import { SuccessfulRegistrationPageComponent } from './components/login-registration-modal/successful-registration-page/successful-registration-page.component';
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { PreviousOrderComponent } from './components/header/previous-order/previous-order.component';
import { PersonalDetailsComponent } from './components/header/personal-details/personal-details.component';
import { AuthGuard } from './auth.guard';
import { OrderSuccessComponent } from './components/checkout/order-success/order-success.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'landing-special-offers', component: SpecialOffersComponent },
  { path: 'category', component: RedWhiteCategoriesComponent },
  {path: 'products/:category', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'term-of-services', component: TermOfServicesComponent },
  { path: 'log-reg', component: LoginRegistrationModalComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'reg-conf-page', component: RegConfirmationPageComponent },
  { path: 'validate/:token', component: ValidateTokenComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'successful-registration-page', component: SuccessfulRegistrationPageComponent },
  { path: 'personal-details', component: PersonalDetailsComponent, canActivate: [AuthGuard] },
  { path: 'previous-orders', component: PreviousOrderComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
