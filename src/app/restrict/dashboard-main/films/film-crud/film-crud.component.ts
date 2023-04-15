import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Film } from 'src/app/restrict/models/film';
import { FilmService } from 'src/app/shared/film.service';

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

  id!: number;
  film: Film = new Film();

  @Input() action!: string;
  @Output() showMain = new EventEmitter<boolean>();

  constructor(private router: Router, private route: ActivatedRoute, private filmService: FilmService) { }

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
        case 'Vew Film':
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
    this.filmService.getFilmById(this.id).subscribe(
      data => {
        this.film = data;
      }
    );
  }

  clearActor() {
    this.film.filmName = '';
    this.film.filmYear = 0;
    this.film.filmDescription = '';
  }

}