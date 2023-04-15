import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Actor } from '../../models/actor';
import { ActorService } from 'src/app/shared/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent implements OnInit {

  actorList!: Actor[];
  mainVisible = true;
  childVisible = false;
  action!: string;

  constructor(private router: Router, private route: ActivatedRoute, private actorService: ActorService) { }

  ngOnInit(): void {
    this.getActorList();
  }

  public getActorList() {
    this.actorService.getAllActors().subscribe(
      data => {
        this.actorList = data;
      });      
  }

  onCreate() {
    this.action = 'Create new Actor';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../actors/create'], { relativeTo: this.route });
  }

  onUpdate(index: number) {
    this.action = 'Update Actor';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../actors/update', ++index], { relativeTo: this.route });
  }

  onView(index: number) {
    this.action = 'Vew Actor';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../actors/view', ++index], { relativeTo: this.route });
  }

  onDelete() {
  }

  showMainEvent(flag: boolean) {
    this.mainVisible = true;
    this.childVisible = false;
    
  }
}
