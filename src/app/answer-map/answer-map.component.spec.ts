import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerMapComponent } from './answer-map.component';

describe('AnswerMapComponent', () => {
  let component: AnswerMapComponent;
  let fixture: ComponentFixture<AnswerMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
