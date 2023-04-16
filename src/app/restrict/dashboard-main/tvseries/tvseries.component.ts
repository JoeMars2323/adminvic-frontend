import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvserieService } from 'src/app/shared/tvserie.service';
import { Tvserie } from '../../models/tvserie';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})

export class TvseriesComponent implements OnInit {

  tvserieList!: Tvserie[];
  mainVisible = true;
  childVisible = false;
  action!: string;

  constructor(private router: Router, private route: ActivatedRoute, private tvserieService: TvserieService) { }

  ngOnInit(): void {
    this.getTvseriesList();
  }

  public getTvseriesList() {
    this.tvserieService.getAllTvseries().subscribe(
      data => {
        this.tvserieList = data;
      });      
  }

  onCreate() {
    this.action = 'Create new TV Serie';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../tvseries/create'], { relativeTo: this.route });
  }

  onUpdate(index: number) {
    this.action = 'Update TV Serie';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../tvseries/update', ++index], { relativeTo: this.route });
  }

  onView(index: number) {
    this.action = 'Vew TV Serie';
    this.mainVisible = false;
    this.childVisible = true;
    this.router.navigate(['../tvseries/view', ++index], { relativeTo: this.route });
  }

  onDelete() {
  }

  showMainEvent(flag: boolean) {
    this.mainVisible = true;
    this.childVisible = false;
    
  }

}
