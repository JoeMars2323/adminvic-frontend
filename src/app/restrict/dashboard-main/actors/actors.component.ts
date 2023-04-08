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
  actor!: Actor;
  mainVisible = true;
  childVisible = false;
  action!: string;

  constructor(private actorService: ActorService, private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['actor/create'], { relativeTo: this.route });
  }

  onUpdate() {
    this.action = 'Update Actor';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['actor/update'], { relativeTo: this.route });
  }

  onView() {
    this.action = 'Vew Actor';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['actor/view'], { relativeTo: this.route });
  }

  onDelete() {
  }

  showMainEvent(flag: boolean) {
    this.mainVisible = true;
    this.childVisible = false;
    
  }
}
