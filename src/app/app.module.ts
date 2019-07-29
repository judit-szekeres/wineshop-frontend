import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HttpClientModule } from '@angular/common/http';
import { RegConfirmationPageComponent } from './components/login-registration-modal/reg-confirmation-page/reg-confirmation-page.component';
import { FilterSettingsComponent } from './components/products/filter-settings/filter-settings.component';
import { CategoryPipe } from './pipes/category.pipe';
import { ValidateTokenComponent } from './components/login-registration-modal/validate-token/validate-token.component';
import { WineDataModalComponent } from './components/wine-data-modal/wine-data-modal.component';
import { SuccessfulRegistrationPageComponent } from './components/login-registration-modal/successful-registration-page/successful-registration-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentMethodComponent } from './components/checkout/payment-method/payment-method.component';
import { OrderSummaryComponent } from './components/checkout/order-summary/order-summary.component';
import { PreviousOrderComponent } from './components/header/previous-order/previous-order.component';
import { PersonalDetailsComponent } from './components/header/personal-details/personal-details.component';
import { PageButtonComponent } from './components/products/page-button/page-button.component';
import { CartTextComponent } from './components/cart/cart-total/cart-text/cart-text.component';
import { OrderSuccessComponent } from './components/checkout/order-success/order-success.component';
import { PaginationComponent } from './components/products/pagination/pagination.component';


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
    RegConfirmationPageComponent,
    FilterSettingsComponent,
    CategoryPipe,
    ValidateTokenComponent,
    WineDataModalComponent,
    CheckoutComponent,
    SuccessfulRegistrationPageComponent,
    PersonalDetailsComponent,
    PreviousOrderComponent,
    PaymentMethodComponent,
    OrderSummaryComponent,
    CartTextComponent,
    OrderSuccessComponent,
    PageButtonComponent,
    PaginationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
