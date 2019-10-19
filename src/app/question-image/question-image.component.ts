import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-question-image',
  templateUrl: './question-image.component.html',
  styleUrls: ['./question-image.component.scss']
})
export class QuestionImageComponent implements OnInit {

  @Input()
  img: string

  constructor() { }

  ngOnInit() {
  }

}
