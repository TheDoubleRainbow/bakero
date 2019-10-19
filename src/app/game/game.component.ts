import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  public stats = {
    temp: '23',
    pressure: '10.21',
    humidity: '20%'
  }

  ngOnInit() {
  }

}
