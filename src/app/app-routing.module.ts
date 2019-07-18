import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpecialOffersComponent } from './components/landing-page/special-offers/special-offers.component';
import {RedWhiteCategoriesComponent} from './components/landing-page/red-white-categories/red-white-categories.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingPageComponent }
  { path: 'landing-special-offers', component: SpecialOffersComponent },
  { path: '', component: LandingPageComponent },
  { path: 'category', component: RedWhiteCategoriesComponent },


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
