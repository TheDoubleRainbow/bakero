import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OpenWeatherService } from '../open-weather.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private dataService: OpenWeatherService) { }

  public stats = {
    temp: 23,
    pressure: 10.21,
    humidity: 20,
    elevation: 1200,
  }

  public markerStats = {}

  public answerDisabled = true;

  onAnsverMapClick(point: {lng: number, lat: number}) {
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

  ngOnInit() {
  }

}
