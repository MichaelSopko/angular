import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenegmentKpiComponent } from './menegment-kpi.component';

describe('MenegmentKpiComponent', () => {
  let component: MenegmentKpiComponent;
  let fixture: ComponentFixture<MenegmentKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenegmentKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenegmentKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
