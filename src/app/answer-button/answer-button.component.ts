import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.scss']
})
export class AnswerButtonComponent implements OnInit {

  constructor() { }
  
  public disabled = false;

  ngOnInit() {
  }

}
