import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly certList: Image[];
  readonly mutualFundList: Image[];
  readonly insList: Image[];
  readonly hInsList: Image[];
  readonly npsList: Image[];

  constructor() {

    this.certList = [
      Image.createImage("Insurance Regulatory and Development Authority", "IRDA", "../../assets/home/irda_logo.png"),
      Image.createImage("Assosiation of Mutual Fund in India", "AMFI", "../../assets/home/amfi_logo.png")
    ];

    const mfLogoLoaction: string = "../../assets/home/mutual-fund-logo/";

    this.mutualFundList = [
      Image.createImageWithBgColor("Axis Mutual Fund", "axis-mutual-fund-logo", mfLogoLoaction+"axis_logo.svg", "#b5245d"),
      Image.createImage("", "", mfLogoLoaction+"sbi-mf-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"icici-logo.png"),

      Image.createImageWithBgColor("", "", mfLogoLoaction+"KotakLogo.svg", "#da251c"),
      Image.createImage("", "", mfLogoLoaction+"tata-mf-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"Canara-Robeco-Logo.svg"),


      Image.createImage("", "", mfLogoLoaction+"hdfc_logo.svg"),
      Image.createImage("", "", mfLogoLoaction+"parag-parikh-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"pgim-logo.svg"),

      Image.createImage("", "", mfLogoLoaction+"franklin-templation-investment_logo.webp"),
      Image.createImage("", "", mfLogoLoaction+"reliance-nippon-mutual-fund.png"),
      Image.createImage("", "", mfLogoLoaction+"uti_logo.png"),

      Image.createImageWithBgColor("", "", mfLogoLoaction+"aditya-birla-capital-logo.png", "#c7222a"),
      Image.createImage("", "", mfLogoLoaction+"mirae-asset-mutual-fund-logo.jpg"),
      Image.createImage("", "", mfLogoLoaction+"invesco_mf_logo.jpg"),

      Image.createImageWithBgColor("", "", mfLogoLoaction+"ltfs-logo.svg", "#ffcb05"),
      Image.createImage("", "", mfLogoLoaction+"LIC-Logo.png"),
      Image.createImageWithBgColor("", "", mfLogoLoaction+"edelweiss-logo.png", "#2857a4"),

      Image.createImage("", "", mfLogoLoaction+"motilal-oswal-amc-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"IDBI-MF-Logo.jpg"),
      Image.createImage("", "", mfLogoLoaction+"dsp-logo.png"),

      Image.createImage("", "", mfLogoLoaction+"Union-MF-Logo.jpg"),
      Image.createImage("", "", mfLogoLoaction+"boi-mf-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"baroda-bnp-logo.jpg"),

      Image.createImage("", "", mfLogoLoaction+"quant-logo.png"),
      Image.createImageWithBgColor("", "", mfLogoLoaction+"quantum-logo.png", "#0f376a"),
      Image.createImage("", "", mfLogoLoaction+"principal-logo.png"),

      Image.createImage("", "", mfLogoLoaction+"iti-mf-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"yes-mf-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"navi-logo.svg"),

      Image.createImage("", "", mfLogoLoaction+"mahindra-mf-logo.jpg"),
      Image.createImage("", "", mfLogoLoaction+"trust-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"samco-logo.png"),
      Image.createImage("", "", mfLogoLoaction+"SundaramMutual-Logo.png")
    ];

    const insLogoLoaction: string = "../../assets/home/ins-logo/";

    this.insList = [
      Image.createImageWithBgColor("", "", insLogoLoaction+"bajaj-logo.png", "#0071bb"),
    ]

    const hInsLogoLoaction: string = "../../assets/home/health-ins-logo/";
    this.hInsList = [
      Image.createImage("", "", hInsLogoLoaction+"start-health-ins-logo.png"),
    ];

    const npsLogoLoaction: string = "../../assets/home/nps-logo/";
    this.npsList = [
      Image.createImage("", "", npsLogoLoaction+"icici-prud-logo.png"),
    ];
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