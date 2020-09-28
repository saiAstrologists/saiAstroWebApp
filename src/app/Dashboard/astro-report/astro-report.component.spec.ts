import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroReportComponent } from './astro-report.component';

describe('AstroReportComponent', () => {
  let component: AstroReportComponent;
  let fixture: ComponentFixture<AstroReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
