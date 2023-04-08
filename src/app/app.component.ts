import { Component } from '@angular/core';
import { Actor } from './restrict/models/actor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'adminvic-frontend';

  actorsList!: Actor[];

  constructor() { 
  }




}


