import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMainComponent } from './restrict/dashboard-main/dashboard-main.component';
import { ActorsComponent } from './restrict/dashboard-main/actors/actors.component';
import { ActorService } from './shared/actor.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActorCrudComponent } from './restrict/dashboard-main/actors/actor-crud/actor-crud.component';
import { FilmsComponent } from './restrict/dashboard-main/films/films.component';
import { TvseriesComponent } from './restrict/dashboard-main/tvseries/tvseries.component';
import { FilmCrudComponent } from './restrict/dashboard-main/films/film-crud/film-crud.component';
import { TvserieCrudComponent } from './restrict/dashboard-main/tvseries/tvserie-crud/tvserie-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMainComponent,
    ActorsComponent,
    ActorCrudComponent,
    FilmsComponent,
    TvseriesComponent,
    FilmCrudComponent,
    TvserieCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
