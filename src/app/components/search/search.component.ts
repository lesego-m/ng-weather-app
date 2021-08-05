import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Coodinates, Weather, DefaultCoordinates } from 'src/app/models';
import { ErrorsService } from 'src/app/services/errors.service';
import { SearchService } from 'src/app/services/search.service';

export const NAVIGATOR = new InjectionToken<Navigator>('Window navigator object');
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    { provide: NAVIGATOR, useValue: window.navigator }
  ]
})
export class SearchComponent implements OnInit {

  public searchResults$!: Observable<Weather>;

  public form: FormGroup = this.formBuilder.group({
    search: ['', [Validators.required, Validators.pattern(/^[a-z\sA-Z]+$/)]]
  });

  constructor(
    @Inject(NAVIGATOR) private navigator: Navigator,
    private searchService: SearchService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  search(): boolean {
    const searchText: string = this.form.value.search.trim();
    this.searchResults$ = this.searchService.weatherSearch(searchText);
    return false; // prevent page refresh
  }

  getCurrentLocation(): void {
    return this.navigator.geolocation.getCurrentPosition(
      (userPosition: GeolocationPosition) => {
        const { latitude, longitude } = userPosition.coords;
        const userCoordinates = { lat: latitude, lon: longitude };

        this.searchResults$ = this.searchService.weatherSearch(userCoordinates);
      },
      (error: GeolocationPositionError) => {
        const { code, message } = error;
        const defaultCoordinates: Coodinates = { lat: DefaultCoordinates.lat, lon: DefaultCoordinates.lon };
        this.searchResults$ = this.searchService.weatherSearch(defaultCoordinates);

      }
    );
  }
}
