import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
const routes: Routes = [
  { path: 'login', component: LoginpageComponent},
  { path: 'register', component: RegisterpageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'landing', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
