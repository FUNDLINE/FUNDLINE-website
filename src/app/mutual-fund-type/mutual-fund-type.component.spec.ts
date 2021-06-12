import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundTypeComponent } from './mutual-fund-type.component';

describe('MutualFundTypeComponent', () => {
  let component: MutualFundTypeComponent;
  let fixture: ComponentFixture<MutualFundTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualFundTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
