import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { groupBy, mergeMap, tap, map, toArray, concatMap } from 'rxjs/operators';

import { Coodinates, ForecastAndTimezone, DefaultCoordinates, Forecast, CityInfo } from 'src/app/models';
import { SearchService } from 'src/app/services/search.service';
import { groupForecastByDay } from 'src/app/shared';

export interface people {
  age: number,
  name: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchResults$!: Observable<CityInfo>;
  public weather$!: Observable<Forecast[][]>;
  public timeZone!: string;

  public form: FormGroup = this.formBuilder.group({
    search: ['', [Validators.required, Validators.pattern(/^[a-z\sA-Z]+$/)]]
  });

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  search(): void {
    const searchText: string = this.form.value.search;
    this.searchResults$ = this.searchService.weatherSearch(searchText).pipe(map(data => data.city));
  }

  private getCurrentLocation(): void {
    if (!navigator?.geolocation) {
      console.log("Geolocation is not supported by this browser.");
    }

    navigator.geolocation.getCurrentPosition(
      (userPosition: GeolocationPosition) => {
        const { latitude, longitude } = userPosition.coords;
        const userCoordinates = { lat: latitude, lon: longitude };
        console.info(`User allowed location access. Position: ${latitude}, ${longitude}`, userPosition);

        this.searchResults$ = this.getSearchResults(userCoordinates);
      },
      (error: GeolocationPositionError) => {
        const { code, message } = error;
        const defaultCoordinates: Coodinates = { lat: DefaultCoordinates.lat, lon: DefaultCoordinates.lon };
        console.error(`User rejected location access code: ${code}, error message is: ${message}`);

        this.searchResults$ = this.getSearchResults(defaultCoordinates);
      }
    );
  }

  private getSearchResults(search: string | Coodinates): Observable<CityInfo> {
    return this.searchService.weatherSearch(search).pipe(
      tap(data => this.weather$ = this.getForecastList(data)),
      map(data => data.city),
      //tap(city => this.timeZone = city.timezone.toString())
    );
  }

  private getForecastList(res: ForecastAndTimezone): Observable<Forecast[][]> {
    const { list } = res;
    return of(list).pipe(
      concatMap(days => days),
      groupBy(p => groupForecastByDay(p.dt_txt)),
      mergeMap((group$) => group$.pipe(
        toArray())
      )
    ).pipe(toArray(), tap(console.log));
  }

  //this.messages.showErrors(errorMessage); ---
}
