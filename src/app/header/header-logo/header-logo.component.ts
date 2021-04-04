import { Component, Host, HostListener, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';
import { CommonUtil } from 'src/app/CommonUtil';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent implements OnInit {

  scrollPosition : number = 0;
  //FIXME Initialize through constructor
  minimumWidth : number = 0;
  maximumWidth : number = 0;
  width : number = 0;
  height : number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.minimumWidth = 50;
    this.maximumWidth = CommonUtil.getHeaderMaximumHeight();
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
    return {
      "height" : this.height+ "px",
      "width" : this.width + "px"
    }
  }

}
