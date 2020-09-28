import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroQuestionComponent } from './astro-question.component';

describe('AstroQuestionComponent', () => {
  let component: AstroQuestionComponent;
  let fixture: ComponentFixture<AstroQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
