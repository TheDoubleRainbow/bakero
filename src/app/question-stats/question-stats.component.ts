import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-stats',
  templateUrl: './question-stats.component.html',
  styleUrls: ['./question-stats.component.scss']
})
export class QuestionStatsComponent implements OnInit {

  constructor() { }

  @Input()
  stats

  ngOnInit() {
  }

}
