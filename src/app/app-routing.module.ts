import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMainComponent } from './restrict/dashboard-main/dashboard-main.component';
import { ActorsComponent } from './restrict/dashboard-main/actors/actors.component';
import { ActorCrudComponent } from './restrict/dashboard-main/actors/actor-crud/actor-crud.component';
import { FilmsComponent } from './restrict/dashboard-main/films/films.component';
import { TvseriesComponent } from './restrict/dashboard-main/tvseries/tvseries.component';
import { FilmCrudComponent } from './restrict/dashboard-main/films/film-crud/film-crud.component';
import { TvserieCrudComponent } from './restrict/dashboard-main/tvseries/tvserie-crud/tvserie-crud.component';


const routes: Routes = [
  /*{ path: '', redirectTo: '/login', pathMatch: 'full' },*/
  { path: 'main', component: DashboardMainComponent },
  { path: 'actors', component: ActorsComponent, children: [
    { path: 'actor/create', component: ActorCrudComponent },
    { path: 'actor/update/:id', component: ActorCrudComponent },
    { path: 'actor/view/:id', component: ActorCrudComponent }
  ]},
  { path: 'films', component: FilmsComponent, children: [
    { path: 'films/create', component: FilmCrudComponent },
    { path: 'films/update/:id', component: FilmCrudComponent },
    { path: 'films/view/:id', component: FilmCrudComponent }
  ]},
  { path: 'tvseries', component: TvseriesComponent, children: [
    { path: 'tvseries/create', component: TvserieCrudComponent },
    { path: 'tvseries/update/:id', component: TvserieCrudComponent },
    { path: 'tvseries/view/:id', component: TvserieCrudComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
