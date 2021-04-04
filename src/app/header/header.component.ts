import { CommonUtil } from '../CommonUtil';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrollPosition : number = 0;


  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onScroll(): void {

    this.scrollPosition = CommonUtil.getScrollPosition();

  }


}
