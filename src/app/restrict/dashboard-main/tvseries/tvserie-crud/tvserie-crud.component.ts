import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Actor } from 'src/app/restrict/models/actor';
import { Tvserie } from 'src/app/restrict/models/tvserie';
import { TvserieService } from 'src/app/shared/tvserie.service';

@Component({
  selector: 'app-tvserie-crud',
  templateUrl: './tvserie-crud.component.html',
  styleUrls: ['./tvserie-crud.component.css']
})
export class TvserieCrudComponent implements OnInit {

  event = true;
  create = false;
  read = false;
  update = false;

  id!: number;
  tvserie: Tvserie = new Tvserie();

  @Input() action!: string;
  @Output() showMain = new EventEmitter<boolean>();

  constructor(private router: Router, private route: ActivatedRoute, private actorService: TvserieService) {}

  ngOnInit(): void {
    this.selectAction();
  }

  onBack(eventParam: boolean) {
    this.showMain.emit(this.event);
    this.router.navigate(['../tvseries'], { relativeTo: this.route });
  }

  selectAction() {
    switch(this.action) {
      case 'Create new Tvserie':
        this.create = true;
        this.read = false;
        this.update = false;
        break;
      case 'Update Tvserie':
        this.loadData();
        this.create = false;
        this.read = false;
        this.update = true;
        break;
      case 'Vew Tvserie':
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
    this.actorService.getTvserieById(this.id).subscribe(
      data => {
        this.tvserie = data;
      }
    );
  }

  clearActor() {

  }

}
