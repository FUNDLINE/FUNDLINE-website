import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isNavOpen : Boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  navToggle() {
    this.isNavOpen = !this.isNavOpen;
  }

}
