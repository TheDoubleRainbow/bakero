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

  private score = 0;

  getUser() {
    if(this.user.name == 'Username' && localStorage.name) {
      this.setUserName(localStorage.name);
    }
    return this.user;
  }

  setUserName(name: string) {
    this.user.name = name;
    localStorage.name = name;
  }

  getScore() {
    return this.score;
  }

  addScore(value) {
    this.score += value*1;
  }

  nullScore() {
    this.score = 0;
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

  checkEnd() {
    console.log('round' + this.round, 'rounds: ' + this.roundNum)
    if(!(this.round < this.roundNum - 1)) {
      return true;
    }
  }

  startGame() {
    this.roundNum = 3;
    this.rounds = [];
    this.round = 0;
    this.router.navigate(['./','game']);
    this.makeRounds();
    this.nullScore();
    this.gameStarted = true;
  }
}
