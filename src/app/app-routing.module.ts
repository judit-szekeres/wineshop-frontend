import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpecialOffersComponent } from './components/landing-page/special-offers/special-offers.component';
import {RedWhiteCategoriesComponent} from './components/landing-page/red-white-categories/red-white-categories.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/footer/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'landing-special-offers', component: SpecialOffersComponent },
  { path: 'category', component: RedWhiteCategoriesComponent },
  {path: 'products/category-white', component: ProductsComponent },
  {path: 'products/category-red', component: ProductsComponent },
  { path: 'contact', component: ContactComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
