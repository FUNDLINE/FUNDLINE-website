import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundAdvantageComponent } from './mutual-fund-advantage.component';

describe('MutualFundAdvantageComponent', () => {
  let component: MutualFundAdvantageComponent;
  let fixture: ComponentFixture<MutualFundAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualFundAdvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
