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
    lat: 50,
    lng: 50
  };

  public marker = {
    lat: 9999,
    lng: 9999
  }

  public zoom = 3

  constructor() { }

  initMap() {
    
  }

  ngOnInit() {

  }

}
