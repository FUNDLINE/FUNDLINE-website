import { CommonUtil } from 'src/app/ScrollUtil';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  marginTop: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.setMarginTop();
  }

  @HostListener('window:resize', []) onResize(): void {
    this.ngOnInit();
  }

  setMarginTop() : void {
    this.marginTop = CommonUtil.getHeaderMaximumHeight();
  }

  getMarginTop() : {[key: string] : string} {
    return {
      "margin-top" : this.marginTop+"px"
    }
  }

}
