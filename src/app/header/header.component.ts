import { CommonUtil } from 'src/Util/commonUtil';
import { constant } from './../../Util/constant';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrollPosition : number = 0;
  boxShadow : boolean = !CommonUtil.isMobile();

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onScroll(): void {

    this.scrollPosition = CommonUtil.getScrollPosition();
    this.boxShadow = (!CommonUtil.isMobile()) || CommonUtil.getScrollPosition()>=(CommonUtil.getMaximumHeaderLogoWidth() - constant.minimumHeaderLogoWidth);
  }


}
