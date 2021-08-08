import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  certList: Image[];
  mutualFundList: Image[];

  constructor() {
    this.certList = [
      Image.createImage("Insurance Regulatory and Development Authority", "IRDA", "../../assets/home/irda_logo.png"),
      Image.createImage("Assosiation of Mutual Fund in India", "AMFI", "../../assets/home/amfi_logo.png")
    ]

    this.mutualFundList = [
      Image.createImageWithBgColor("Axis Mutual Fund", "axis-mutual-fund-logo", "../../assets/home/mutual-fund-logo/axis_logo.svg", "#b5245d"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/sbi-mf-logo.png"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/icici-logo.png"),

      Image.createImageWithBgColor("", "", "../../assets/home/mutual-fund-logo/KotakLogo.svg", "#da251c"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/tata-mf-logo.png"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/Canara-Robeco-Logo.svg"),


      Image.createImage("", "", "../../assets/home/mutual-fund-logo/hdfc_logo.svg"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/parag-parikh-logo.png"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/pgim-logo.svg"),

      Image.createImage("", "", "../../assets/home/mutual-fund-logo/franklin-templation-investment_logo.webp"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/reliance-nippon-mutual-fund.png"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/uti_logo.png"),

      Image.createImageWithBgColor("", "", "../../assets/home/mutual-fund-logo/aditya-birla-capital-logo.png", "#c7222a"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/mirae-asset-mutual-fund-logo.jpg"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/invesco_mf_logo.jpg"),

      Image.createImageWithBgColor("", "", "../../assets/home/mutual-fund-logo/ltfs-logo.svg", "#ffcb05"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/LIC-Logo.png"),
      Image.createImageWithBgColor("", "", "../../assets/home/mutual-fund-logo/edelweiss-logo.png", "#2857a4"),

      Image.createImage("", "", "../../assets/home/mutual-fund-logo/motilal-oswal-amc-logo.png"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/IDBI-MF-Logo.jpg"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/dsp-logo.png"),

      Image.createImage("", "", "../../assets/home/mutual-fund-logo/Union-MF-Logo.jpg"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/boi-mf-logo.png"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/bank_of_baroda_logo.png"),

      Image.createImage("", "", "../../assets/home/mutual-fund-logo/quant-logo.png"),
      Image.createImageWithBgColor("", "", "../../assets/home/mutual-fund-logo/quantum-logo.png", "#0f376a"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/principal-logo.png"),

      Image.createImage("", "", "../../assets/home/mutual-fund-logo/bnp-paribas-logo.jpg"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/iti-mf-logo.png"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/yes-mf-logo.png"),

      Image.createImage("", "", "../../assets/home/mutual-fund-logo/navi-logo.svg"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/mahindra-mf-logo.jpg"),
      Image.createImage("", "", "../../assets/home/mutual-fund-logo/trust-logo.png")

    ]
  }

  ngOnInit(): void {
  }

}

class Image {


  static createImage(name:string, altName:string, image:string) : Image {
      return new Image(name, altName, image, "transparent");
  }

  static createImageWithBgColor(name:string, altName:string, image:string, bgColor:string) : Image {
    return new Image(name, altName, image, bgColor);
  }

  constructor(
    private name:string,
    private altName:string,
    private image:string,
    private bgColor:string) {
  }

  public getName(): string {
    return this.name;
  }

  public getAltName(): string {
    return this.altName;
  }

  public getImage(): string {
    return this.image;
  }

  public getBgColor(): string {
    return this.bgColor;
  }
}