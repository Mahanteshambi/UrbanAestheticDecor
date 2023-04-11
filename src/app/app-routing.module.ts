import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Project1Component } from './components/project1/project1.component';
import { Project2Component } from './components/project2/project2.component';
import { Project3Component } from './components/project3/project3.component';
import { HomeComponent } from './components/home/home.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { TvunitComponent } from './components/tvunit/tvunit.component';
import { LivingRoomComponent } from './components/livingRoom/livingRoom.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { WardrobeComponent } from './components/wardrobe/wardrobe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'project-1',
    component: Project1Component,
  },
  {
    path: 'project-2',
    component: Project2Component,
  },
  {
    path: 'project-3',
    component: Project3Component,
  },
  {
    path: 'bedroom',
    component: BedroomComponent,
  },
  {
    path: 'kitchen',
    component: KitchenComponent,
  },
  {
    path: 'tv-unit',
    component: TvunitComponent,
  },
  {
    path: 'living-room',
    component: LivingRoomComponent,
  },
  {
    path: 'bathroom',
    component: BathroomComponent,
  },
  {
    path: 'wardrobe',
    component: WardrobeComponent,
  },
]; // sets up routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
