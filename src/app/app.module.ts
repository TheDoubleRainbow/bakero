import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { AnswerMapComponent } from './answer-map/answer-map.component';
import { QuestionMapComponent } from './question-map/question-map.component';
import { QuestionImageComponent } from './question-image/question-image.component';
import { QuestionStatsComponent } from './question-stats/question-stats.component';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AnswerButtonComponent } from './answer-button/answer-button.component';
import { AnswerMarkerStatsComponent } from './answer-marker-stats/answer-marker-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    AnswerMapComponent,
    QuestionMapComponent,
    QuestionImageComponent,
    QuestionStatsComponent,
    HeaderComponent,
    AnswerButtonComponent,
    AnswerMarkerStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBe1z7-kcsUos92LHb3Qfq_km1WVLFrdtE'
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
