import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Coodinates, Weather, DefaultCoordinates } from 'src/app/models';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchResults$!: Observable<Weather>;

  public form: FormGroup = this.formBuilder.group({
    search: ['', [Validators.required, Validators.pattern(/^[a-z\sA-Z]+$/)]]
  });

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  search(): boolean {
    const searchText = this.form.value.search;
    this.searchResults$ = this.searchService.weatherSearch(searchText);
    return false; // prevent page refresh
  }

  private getCurrentLocation(): void {
    if (!navigator?.geolocation) {
      console.log("Geolocation is not supported by this browser.");
    }

    navigator.geolocation.getCurrentPosition(
      (userPosition: GeolocationPosition) => {
        const { latitude, longitude } = userPosition.coords;
        const userCoordinates = { lat: latitude, lon: longitude };
        console.info(`User allowed location access. Position: ${latitude}, ${longitude}`);

        this.searchResults$ = this.searchService.weatherSearch(userCoordinates);
      },
      (error: GeolocationPositionError) => {
        const { code, message } = error;
        const defaultCoordinates: Coodinates = { lat: DefaultCoordinates.lat, lon: DefaultCoordinates.lon };
        console.error(`User rejected location access code: ${code}, error message is: ${message}`);

        this.searchResults$ = this.searchService.weatherSearch(defaultCoordinates);
      }
    );
  }


  //this.messages.showErrors(errorMessage); ---
}
