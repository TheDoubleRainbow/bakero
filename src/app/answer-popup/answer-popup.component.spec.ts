import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerPopupComponent } from './answer-popup.component';

describe('AnswerPopupComponent', () => {
  let component: AnswerPopupComponent;
  let fixture: ComponentFixture<AnswerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
