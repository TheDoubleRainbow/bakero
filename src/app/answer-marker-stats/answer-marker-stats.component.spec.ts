import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerMarkerStatsComponent } from './answer-marker-stats.component';

describe('AnswerMarkerStatsComponent', () => {
  let component: AnswerMarkerStatsComponent;
  let fixture: ComponentFixture<AnswerMarkerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerMarkerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerMarkerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
