import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroRegistrationComponent } from './astro-registration.component';

describe('AstroRegistrationComponent', () => {
  let component: AstroRegistrationComponent;
  let fixture: ComponentFixture<AstroRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
