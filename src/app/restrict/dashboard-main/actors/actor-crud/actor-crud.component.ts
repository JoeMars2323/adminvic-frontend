import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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

  @Input() action!: string;
  @Output() showMain = new EventEmitter<boolean>();

  constructor(private router: Router, private route: ActivatedRoute) { }

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
        this.create = false;
        this.read = false;
        this.update = true;
        break;
      default:
        this.create = false;
        this.read = true;
        this.update = false;
      break;
    }
  }

  

}
