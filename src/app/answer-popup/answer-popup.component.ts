import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-popup',
  templateUrl: './answer-popup.component.html',
  styleUrls: ['./answer-popup.component.scss']
})
export class AnswerPopupComponent implements OnInit {

  @Input()
  popupData = {
    right: {
      lat: 40,
      lng: 40,
    },
    user: {
      lat: 30,
      lng: 30,
    },
    score: 0
  }

  @Output() onNextLevel: EventEmitter<any> = new EventEmitter(); 

  nextLevel() {
    this.onNextLevel.emit();
  }

  constructor() { }

  ngOnInit() {

  }

}
