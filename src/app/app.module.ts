import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { RedWhiteCategoriesComponent } from './components/landing-page/red-white-categories/red-white-categories.component';
import { SpecialOffersComponent } from './components/landing-page/special-offers/special-offers.component';
import { LoginRegistrationModalComponent } from './components/login-registration-modal/login-registration-modal.component';
import { PolicyComponent } from './components/footer/policy/policy.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TermOfServicesComponent } from './components/footer/term-of-services/term-of-services.component';
import { CartTableComponent } from './components/cart/cart-table/cart-table.component';
import { CartTotalComponent } from './components/cart/cart-total/cart-total.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    CartComponent,
    RedWhiteCategoriesComponent,
    SpecialOffersComponent,
    LoginRegistrationModalComponent,
    PolicyComponent,
    ContactComponent,
    ProductCardComponent,
    TermOfServicesComponent,
    CartTableComponent,
    CartTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
