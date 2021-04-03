import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollUtil } from 'src/app/ScrollUtil';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent implements OnInit {

  scrollPosition : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onScroll(): void {

    this.scrollPosition = ScrollUtil.getScrollPosition();
    console.log(this.scrollPosition);

  }

}
