import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  certList: Certified[];

  constructor() {
    this.certList = [
      new Certified("Insurance Regulatory and Development Authority", "IRDA", "../../assets/home/irda_logo.png"),
      new Certified("Assosiation of Mutual Fund in India", "AMFI", "../../assets/home/amfi_logo.png")
    ]
  }

  ngOnInit(): void {
  }

}

class Certified {

  constructor(
    private name:string,
    private altName:string,
    private image:string) {
  }

  public getName(): string {
    return this.name;
  }

  public getImage(): string {
    return this.image;
  }

  public getAltName(): string {
    return this.image;
  }
}