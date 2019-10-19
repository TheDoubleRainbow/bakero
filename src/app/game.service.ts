import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import questions from '../assets/places.js';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private router: Router) {}

  private user = {
    name: 'Username',
  }

  private roundNum = 3;

  private rounds = [];
  private round = 0;
  public gameStarted = false;

  getUser() {
    console.log(questions);
    return this.user;
  }

  setUserName(name: string) {
    this.user.name = name;
  }

  makeRounds() {
    this.rounds = [];
    let roundArr = questions;
    for(let i = 0; i < this.roundNum; i++) {
      let rand = Math.random() * (roundArr.length);
      let id = Math.floor(rand);
      this.rounds.push(roundArr[id]);
      roundArr.splice(i, 1);
    }
  }

  getCurrenctRound() {
    return this.rounds[this.round];
  }

  nextRound(){
    this.round++;
  }

  startGame() {
    this.router.navigate(['./','game']);
    this.makeRounds();
    this.gameStarted = true;
  }
}
