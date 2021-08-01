import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { groupBy, mergeMap, tap, map, toArray, concatMap } from 'rxjs/operators';

import { Forecast, Weekdays } from 'src/app/models';
import { groupForecastByDay } from 'src/app/shared';

@Component({
  selector: 'app-future-days',
  templateUrl: './future-days.component.html',
  styleUrls: ['./future-days.component.scss']
})
export class FutureDaysComponent implements OnInit {

  @Input()
  days!: Forecast[];

  public weather$!: Observable<Forecast[][]>;

  constructor() { }

  ngOnInit(): void {
    this.weather$ = this.getForecastList(this.days);
  }

  private getForecastList(list: Forecast[]): Observable<Forecast[][]> {
    return of(list).pipe(
      concatMap(days => days),
      groupBy(p => groupForecastByDay(p.dt_txt)),
      mergeMap((group$) => group$.pipe(
        toArray())
      )
    ).pipe(
      toArray(),
      map(days => days.slice(0, Weekdays.limit)),
      tap(console.log));
  }
}
