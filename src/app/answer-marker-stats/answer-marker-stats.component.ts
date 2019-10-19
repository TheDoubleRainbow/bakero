import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-marker-stats',
  templateUrl: './answer-marker-stats.component.html',
  styleUrls: ['./answer-marker-stats.component.scss']
})
export class AnswerMarkerStatsComponent implements OnInit {

  constructor() { }
  @Input()
  stats

  ngOnInit() {
  }

}
