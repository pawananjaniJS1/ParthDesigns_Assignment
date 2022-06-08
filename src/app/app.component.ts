import { Component, OnInit, VERSION, ViewChild} from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number = 2;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }
  
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }





}
