import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TermOfServicesComponent } from './components/footer/term-of-services/term-of-services.component';
import { QuoteComponent } from './components/footer/quote/quote.component';
import { CartTableComponent } from './components/cart/cart-table/cart-table.component';
import { CartTotalComponent } from './components/cart/cart-total/cart-total.component';
import {CarouselModule} from "ngx-carousel-lib";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterSettingsComponent } from './components/products/filter-settings/filter-settings.component';
import { CategoryPipe } from './pipes/category.pipe';


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
    RegistrationModalComponent,
    ContactComponent,
    ProductCardComponent,
    TermOfServicesComponent,
    QuoteComponent,
    CartTableComponent,
    CartTotalComponent,
    ProductDetailsComponent,
    FilterSettingsComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
