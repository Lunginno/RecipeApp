import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './pages/detailspage/detailspage.component';
import { CardsComponent } from './components/cards/cards.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/loginpage/loginpage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './pages/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    DetailsComponent,
    CardsComponent,
    LandingpageComponent,
    LoginComponent,
    ProfileComponent,
    CategoriesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
