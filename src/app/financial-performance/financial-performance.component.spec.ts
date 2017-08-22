import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPerformanceComponent } from './financial-performance.component';

describe('FinancialPerformanceComponent', () => {
  let component: FinancialPerformanceComponent;
  let fixture: ComponentFixture<FinancialPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
