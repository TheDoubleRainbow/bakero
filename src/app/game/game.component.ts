import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../open-weather.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private dataService: OpenWeatherService) { }

  public stats = {
    temp: '23',
    pressure: '10.21',
    humidity: '20%'
  }

  onAnsverMapClick(point: {lng: number, lat: number}) {
    this.dataService.getDataByGeopoint(point.lng, point.lat).subscribe( data => {
      
    })
  }

  ngOnInit() {
  }

}
