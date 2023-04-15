import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Actor } from 'src/app/restrict/models/actor';
import { ActorService } from 'src/app/shared/actor.service';

@Component({
  selector: 'app-actor-crud',
  templateUrl: './actor-crud.component.html',
  styleUrls: ['./actor-crud.component.css']
})

export class ActorCrudComponent implements OnInit {

  event = true;
  create = false;
  read = false;
  update = false;

  id!: number;
  actor: Actor = new Actor();

  @Input() action!: string;
  @Output() showMain = new EventEmitter<boolean>();

  constructor(private router: Router, private route: ActivatedRoute, private actorService: ActorService) {}

  ngOnInit(): void {
    this.selectAction();
  }

  onBack(eventParam: boolean) {
    this.showMain.emit(this.event);
    this.router.navigate(['../actors'], { relativeTo: this.route });
  }

  selectAction() {
    switch(this.action) {
      case 'Create new Actor':
        this.create = true;
        this.read = false;
        this.update = false;
        break;
      case 'Update Actor':
        this.loadData();
        this.create = false;
        this.read = false;
        this.update = true;
        break;
      case 'Vew Actor':
        this.loadData();
        this.create = false;
        this.read = true;
        this.update = false;
      break;
    }
  }

  loadData() {
    this.route.paramMap.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    )
    this.actorService.getActorById(this.id).subscribe(
      data => {
        this.actor = data;
      }
    );
  }

  clearActor() {
    this.actor.actorName = '';
    this.actor.actorBirthName = '';
    this.actor.actorNickname = '';
    this.actor.actorCity = '';
    this.actor.actorBiography = '';
    this.actor.actorCountry = '';
    this.actor.actorHeight = '';
    this.actor.actorBirthDate = '';
  }

  onClear() {
    this.clearActor
  }

  onSubmit() {
    this.actorService.createActor(this.actor).subscribe(
     data => {}
    );
    this.clearActor();
 }

}