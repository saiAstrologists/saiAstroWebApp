import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologerChatComponent } from './astrologer-chat.component';

describe('AstrologerChatComponent', () => {
  let component: AstrologerChatComponent;
  let fixture: ComponentFixture<AstrologerChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstrologerChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
