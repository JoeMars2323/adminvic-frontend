import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  public username: string = 'João Martins';
 
  public contents: boolean = false;
  public subscriptions: boolean = false;
  public configurations: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // open sidebar menus
  openContents() {
    this.contents = ! this.contents;
    this.subscriptions = false;
    this.configurations = false;
  }

   openSubscriptions() {
    this.contents = false;
    this.subscriptions = !this.subscriptions;
    this.configurations = false;
  }

  openConfigurations() {
    this.contents = false;
    this.subscriptions = false;
    this.configurations = !this.configurations;
  }


}
