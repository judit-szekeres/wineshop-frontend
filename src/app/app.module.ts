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
import { LoginModalComponent } from './components/login-registration-modal/login-modal/login-modal.component';
import { RegistrationModalComponent } from './components/login-registration-modal/registration-modal/registration-modal.component';

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
    LoginModalComponent,
    RegistrationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
