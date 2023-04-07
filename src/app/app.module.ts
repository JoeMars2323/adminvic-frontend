import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMainComponent } from './restrict/dashboard-main/dashboard-main.component';
import { ActorsComponent } from './restrict/actors/actors.component';
import { AwardsComponent } from './restrict/awards/awards.component';
import { ActorService } from './shared/actor.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMainComponent,
    ActorsComponent,
    AwardsComponent
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
