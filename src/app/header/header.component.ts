import { constant } from './../../Util/constant';
import { CommonUtil } from '../../Util/commonUtil';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrollPosition : number = 0;
  boxShadow : boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onScroll(): void {

    this.scrollPosition = CommonUtil.getScrollPosition();
    this.boxShadow = CommonUtil.getScrollPosition()>=(CommonUtil.getHeaderMaximumHeight() - constant.minimumHeaderHeight);
  }


}
