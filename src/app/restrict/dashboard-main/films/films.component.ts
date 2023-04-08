import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from 'src/app/shared/film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsList!: Film[];
  actor!: Film;
  mainVisible = true;
  childVisible = false;
  action!: string;

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFilmList();
  }

  public getFilmList() {
    this.filmService.getAllFilms().subscribe(
      data => {
        this.filmsList = data;
        console.log('test');
        console.log(this.filmService);
      });      
  }

  onCreate() {
    this.action = 'Create new Film';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['film/create'], { relativeTo: this.route });
  }

  onUpdate() {
    this.action = 'Update Film';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['film/update'], { relativeTo: this.route });
  }

  onView() {
    this.action = 'Vew Film';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['film/view'], { relativeTo: this.route });
  }

  onDelete() {
  }

  showMainEvent(flag: boolean) {
    this.mainVisible = true;
    this.childVisible = false;
    
  }

}
