import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Actor } from './actor';
import { ActorService } from 'src/app/shared/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actorList!: Actor[];
  actor!: Actor;

  constructor(private actorService: ActorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getActorList();
  }

  public getActorList() {
    this.actorService.getAllActors().subscribe(
      data => {
        this.actorList = data;
        console.log('test');
        console.log("-> " + this.actorList);
      });      
  }

  onCreate() {
  }

  onView() {
  }

  onUpdate() {
  }

  onDelete() {
  }

}
