import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-popup',
  templateUrl: './answer-popup.component.html',
  styleUrls: ['./answer-popup.component.scss']
})
export class AnswerPopupComponent implements OnInit {
  @Input()
  show = true;

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

  constructor() { }

  ngOnInit() {
  }

}
