import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { MutualFundTypeComponent } from './mutual-fund-type/mutual-fund-type.component';
import { MutualFundAdvantageComponent } from './mutual-fund-advantage/mutual-fund-advantage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsuranceComponent,
    MutualFundComponent,
    MutualFundTypeComponent,
    MutualFundAdvantageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'insurance',
        component: InsuranceComponent,
      },
      {
        path: 'mutual-fund',
        component: MutualFundComponent,
      },
      {
        path: 'types-of-mutual-fund',
        component: MutualFundTypeComponent,
      },
      {
        path: 'advantages-of-mutual-fund',
        component: MutualFundAdvantageComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
