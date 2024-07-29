import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/loginpage/loginpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { DetailsComponent } from './pages/detailspage/detailspage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Redirect root path to /landing
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'landing', component: LandingpageComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'categories/:category', component: CategoriesComponent}
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
