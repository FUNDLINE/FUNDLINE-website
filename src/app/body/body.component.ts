import { CommonUtil } from 'src/Util/commonUtil';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  isMobile : boolean = CommonUtil.isMobile();

  constructor() { }

  ngOnInit(): void {
  }

}
