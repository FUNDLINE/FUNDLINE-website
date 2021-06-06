import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  active: boolean[]=[];

  constructor() {
    this.activate(0);
  }

  ngOnInit(): void {
    this.activate(0);
  }

  activate(index: number): void {
    this.active=[false,false,false,false,false];
    this.active[index] = true;
  }

}
