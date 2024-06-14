import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { CardsComponent } from './components/cards/cards.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    RegisterpageComponent,
    NavbarComponent,
    DetailspageComponent,
    CardsComponent,
    LandingpageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
