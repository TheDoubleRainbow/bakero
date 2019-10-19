import { Component, OnInit, Input } from '@angular/core';
import { OpenWeatherService } from '../open-weather.service';

@Component({
  selector: 'app-answer-map',
  templateUrl: './answer-map.component.html',
  styleUrls: ['./answer-map.component.scss']
})
export class AnswerMapComponent implements OnInit {

  @Input()
  mapData = {
    title: 'Answer map',
    lat: 50,
    lng: 50
  };

  constructor(private dataService: OpenWeatherService) { }

  public marker = null;

  public zoom = 3

  setMarker(lat: number, lng: number) {
    this.marker = { lat, lng };
  }

  initMap() {
    
  }

  ngOnInit() {

  }

}
