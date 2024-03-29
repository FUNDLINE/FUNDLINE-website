import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMSComponent } from './pms.component';

describe('PMSComponent', () => {
  let component: PMSComponent;
  let fixture: ComponentFixture<PMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
