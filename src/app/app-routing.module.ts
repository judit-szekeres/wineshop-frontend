import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SpecialOffersComponent } from './components/landing-page/special-offers/special-offers.component';
import { RedWhiteCategoriesComponent } from './components/landing-page/red-white-categories/red-white-categories.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { PolicyComponent } from './components/footer/policy/policy.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'landing-special-offers', component: SpecialOffersComponent },
  { path: 'category', component: RedWhiteCategoriesComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'contact', component: ContactComponent },


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
