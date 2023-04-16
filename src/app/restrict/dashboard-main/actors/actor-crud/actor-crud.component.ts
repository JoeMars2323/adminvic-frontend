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

  disableActorName =  false
  disableBirthName =  false;
  disableNickname = false;
  disableCountry = false;
  disableCity = false;
  disableBirthdate = false;
  disableBiography = false;
  disableHeight = false;

  actor: Actor = new Actor();
  actorName!: string;

  @Input() id!: number;
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
        this.disableActorName = true;
        this.disableBirthName = true;
        this.disableBirthName =  true;
        this.disableNickname = true;
        this.disableCountry = true;
        this.disableCity = true;
        this.disableBirthdate = true;
        this.disableHeight = true;
        this.disableBiography = true;
        break;
    }
  }

  loadData() {
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
    this.clearActor();
  }

  onSubmit() {
    switch(this.action) {
      case 'Create new Actor':
        this.actorService.createActor(this.actor).subscribe();
          this.clearActor();
          break;
        case 'Update Actor':
          this.actorService.updateActor(this.actor).subscribe();
    }
    
 }

}