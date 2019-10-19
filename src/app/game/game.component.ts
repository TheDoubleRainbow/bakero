import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OpenWeatherService } from '../open-weather.service';
import { GameService } from '../game.service';
import { MapsAPILoader } from '@agm/core';
declare var google;


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private dataService: OpenWeatherService, private gameService: GameService, private mapsAPILoader: MapsAPILoader) { }

  public stats = {
    // temp: 23,
    // pressure: 10.21,
    // humidity: 20,
    // elevation: 1200,
  }

  public markerStats = {}

  public userPoint;

  public answerDisabled = true;

  public round;

  public distance;

  public score;

  onAnsverMapClick(point: {lng: number, lat: number}) {
    this.userPoint = point;
    this.answerDisabled = false;
    this.dataService.getDataByGeopoint(point.lng, point.lat).subscribe( data => {
      this.markerStats = {
        display: true,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        elevation: data.elevation.toFixed(1),
      }

      this.markerSelected()
    })
  }

  markerSelected() {
    this.answerDisabled = false;
  }
  getStats(lat, lng) {
    this.dataService.getDataByGeopoint(lng, lat).subscribe( data => {
      this.stats = {
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        elevation: data.elevation.toFixed(1),
      }
    })
  }

  answer(){
    this.mapsAPILoader.load().then(() => {
      const rightPoint = new google.maps.LatLng(this.round.latitude, this.round.latitude);
      const userPoint = new google.maps.LatLng(this.userPoint.lat, this.userPoint.lng);
      this.distance = google.maps.geometry.spherical.computeDistanceBetween(rightPoint, userPoint);
      this.score = this.distance <= 5000 ?  5000 - this.distance : 0;
      console.log("distance", this.distance );
    });

  }

  ngOnInit() {
    if(!this.gameService.gameStarted) {
      this.gameService.startGame();
    }
    this.round = this.gameService.getCurrenctRound();
    this.getStats(this.round.latitude, this.round.latitude)
    console.log(this.round)
  }

}
