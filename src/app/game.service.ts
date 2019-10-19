import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private router: Router) {}

  private user = {
    name: '',
  }

  private gameStarted = false;

  getUser() {
    return this.user;
  }

  setUserName(name: string) {
    this.user.name = name;
  }

  startGame() {
    this.router.navigate(['./','game']);
    this.gameStarted = true;
  }
}
