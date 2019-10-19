import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { AnswerMapComponent } from './answer-map/answer-map.component';
import { QuestionMapComponent } from './question-map/question-map.component';
import { QuestionImageComponent } from './question-image/question-image.component';
import { QuestionStatsComponent } from './question-stats/question-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    AnswerMapComponent,
    QuestionMapComponent,
    QuestionImageComponent,
    QuestionStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
