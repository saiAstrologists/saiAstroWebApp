import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerDashboardComponent } from './astrologer-dashboard.component';

describe('AstrologerDashboardComponent', () => {
  let component: AstrologerDashboardComponent;
  let fixture: ComponentFixture<AstrologerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrologerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
