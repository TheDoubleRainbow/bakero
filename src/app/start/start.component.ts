import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public loginForm;

  constructor(private gameService: GameService, private formBuilder: FormBuilder) { }

  onLogin(form) {
    console.log(form)
    if(form.value.name.length) {
      this.gameService.setUserName(form.value.name);
      this.gameService.startGame();
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ''
    });
  }

}
