import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private gameService: GameService) { }

  public user = {}

  getUser(){
    this.user = this.gameService.getUser();
  }

  ngOnInit() {
    this.getUser();
  }

}
