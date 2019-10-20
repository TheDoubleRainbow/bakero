import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private gameService: GameService) { }

  public user = {}

  @Input()
  totalScore;

  getUser(){
    this.user = this.gameService.getUser();
  }

  get roundsTotalNumber() {
    return this.gameService.getRoundsTotalNumber();
  }

  get currentRondNumber() {
    return this.gameService.getCurrentRondNumber()
  }

  ngOnInit() {
    this.getUser();
  }

}
