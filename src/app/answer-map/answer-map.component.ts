import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-map',
  templateUrl: './answer-map.component.html',
  styleUrls: ['./answer-map.component.scss']
})
export class AnswerMapComponent implements OnInit {

  @Input()
  mapData = {
    title: 'Answer map',
    lat: 51.678418,
    lng: 7.809007
  };

  constructor() { }

  initMap() {
    
  }

  ngOnInit() {

  }

}
