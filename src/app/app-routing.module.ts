import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMainComponent } from './restrict/dashboard-main/dashboard-main.component';
import { ActorsComponent } from './restrict/actors/actors.component';
import { AwardsComponent } from './restrict/awards/awards.component';


const routes: Routes = [
  /*{ path: '', redirectTo: '/login', pathMatch: 'full' },*/
  { path: 'main', component: DashboardMainComponent },
  { path: 'actors', component: ActorsComponent },
  { path: 'awards', component: AwardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
