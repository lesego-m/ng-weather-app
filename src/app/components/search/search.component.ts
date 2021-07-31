import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { DailyWeather } from 'src/app/models';
import { SearchService } from 'src/app/services/search.service';
import { getCurrentLocation } from 'src/app/shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchResults$!: Observable<DailyWeather[]>;
  public timeZone: string = this.searchService.timezone?.toString();

  public form: FormGroup = this.formBuilder.group({
    search: ['', [Validators.required, Validators.pattern(/^[a-z\sA-Z]+$/)]]
  });

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchResults$ = getCurrentLocation(this.searchService);
  }

  search(): void {
    const searchText: string = this.form.value.search;
    this.searchResults$ = this.searchService.searchByCity(searchText).pipe(
      concatMap(coords => this.searchService.searchByCoodinates(coords))
    );
  }

  //this.messages.showErrors(errorMessage); ---
}
