import { constant } from './../../../Util/constant';
import { Component, Host, HostListener, OnInit } from '@angular/core';
import { CommonUtil } from 'src/Util/commonUtil';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent implements OnInit {

  scrollPosition : number = 0;
  minimumWidth : number = 0;
  maximumWidth : number = 0;
  width : number = 0;
  height : number = 0;
  isFloatLeft : boolean = !CommonUtil.isMobile();

  constructor() {

  }

  ngOnInit(): void {
    this.minimumWidth = constant.minimumHeaderLogoWidth;
    this.maximumWidth = CommonUtil.getMaximumHeaderLogoWidth();
    this.setHeightAndWidth();
  }

  @HostListener('window:scroll', []) onScroll(): void {

    this.scrollPosition = CommonUtil.getScrollPosition();
    this.setHeightAndWidth();

  }

  @HostListener('window:resize', []) onResize(): void {
    this.ngOnInit();
  }

  setHeightAndWidth() : void {
    this.scrollPosition = CommonUtil.getScrollPosition();
    if(this.scrollPosition > (this.maximumWidth-this.minimumWidth)) {
      this.width = this.minimumWidth;
    } else {
      this.width = this.maximumWidth - this.scrollPosition;
    }

    this.height=this.width
  }

  getHeightAndWidth() : {[key:string] : string} {
    if(CommonUtil.isMobile()) {
      return {
        "width" : this.width + "px"
      }
    } else {
      return {
        "height" : this.width + "px"
      }
    }

  }

}
