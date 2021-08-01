import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.scss']
})
export class CurrentDayComponent implements OnInit {

  @Input()
  today!: Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}
