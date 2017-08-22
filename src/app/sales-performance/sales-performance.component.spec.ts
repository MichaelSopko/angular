import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPerformanceComponent } from './sales-performance.component';

describe('SalesPerformanceComponent', () => {
  let component: SalesPerformanceComponent;
  let fixture: ComponentFixture<SalesPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
