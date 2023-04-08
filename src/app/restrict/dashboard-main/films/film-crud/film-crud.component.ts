import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-crud',
  templateUrl: './film-crud.component.html',
  styleUrls: ['./film-crud.component.css']
})
export class FilmCrudComponent implements OnInit {

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
    this.router.navigate(['../films'], { relativeTo: this.route });
  }

  selectAction() {
    switch(this.action) {
      case 'Create new Film':
        this.create = true;
        this.read = false;
        this.update = false;
        break;
      case 'Update Film':
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
