import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-map',
  templateUrl: './question-map.component.html',
  styleUrls: ['./question-map.component.scss']
})
export class QuestionMapComponent implements OnInit {

  constructor() { }

  @Input()
  mapData = {
    lat: 51.678418,
    lng: 7.809007
  };
  ngOnInit() {
  }

}
