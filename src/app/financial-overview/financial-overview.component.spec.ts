import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialOverviewComponent } from './financial-overview.component';

describe('FinancialOverviewComponent', () => {
  let component: FinancialOverviewComponent;
  let fixture: ComponentFixture<FinancialOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
