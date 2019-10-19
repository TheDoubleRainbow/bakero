import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.scss']
})
export class AnswerButtonComponent implements OnInit {

  constructor() { }
  
  @Input()
  disabled = true;

  ngOnInit() {
  }

}
