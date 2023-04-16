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
  id!: number;

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
    this.router.navigate(['../actors/create'], {relativeTo: this.route});
  }

  onUpdate(index: number) {
    this.id = index + 1;
    this.action = 'Update Actor';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../actors/update', this.id], {relativeTo: this.route});
  }

  onView(index: number) {
    this.id = index + 1;
    this.action = 'Vew Actor';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../actors/view', this.id], {relativeTo: this.route});
  }

  onDelete(index: number) {
    this.action = 'Delete Actor';
    this.actorService.deleteActor(++index).subscribe();
  }

  showMainEvent(flag: boolean) {
    this.mainVisible = true;
    this.childVisible = false;
    
  }
}
