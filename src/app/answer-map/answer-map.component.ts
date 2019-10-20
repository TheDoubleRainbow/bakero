import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() onMapClick: EventEmitter<any> = new EventEmitter();

  @Input()
  marker = null;
  

  constructor(private dataService: OpenWeatherService) { }

  public zoom = 3

  setMarker(lat: number, lng: number) {
    this.marker = { lat, lng };
    this.onMapClick.emit({lat, lng});
  }

  ngOnInit() {

  }

}
