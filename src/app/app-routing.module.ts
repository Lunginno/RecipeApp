import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Redirect root path to /landing
  { path: 'login', component: LoginpageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'landing', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
