import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

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

  @Input()
  end = false;

  @Input()
  totalScore;

  @Output() onNextLevel: EventEmitter<any> = new EventEmitter(); 

  @Output() onNewGame: EventEmitter<any> = new EventEmitter(); 

  public username = 'Username'

  nextLevel() {
    this.onNextLevel.emit();
  }

  newGame() {
    this.onNewGame.emit();
  }

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.username = this.gameService.getUser().name;
  }

}
