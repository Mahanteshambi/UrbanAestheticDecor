import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Project1Component } from './components/project1/project1.component';
import { Project2Component } from './components/project2/project2.component';
import { Project3Component } from './components/project3/project3.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { TvunitComponent } from './components/tvunit/tvunit.component';
import { LivingRoomComponent } from './components/livingRoom/livingRoom.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { WardrobeComponent } from './components/wardrobe/wardrobe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    HomeComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    BedroomComponent,
    KitchenComponent,
    TvunitComponent,
    LivingRoomComponent,
    BathroomComponent,
    WardrobeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
