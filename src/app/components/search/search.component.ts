import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

import { DailyWeather } from 'src/app/models';
import { SearchService } from 'src/app/services/search.service';
import { getCurrentLocation } from 'src/app/shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchResults$!: Observable<DailyWeather>;

  public form: FormGroup = this.formBuilder.group({
    search: ['', [Validators.required, Validators.pattern(/^[a-z\sA-Z]+$/)]]
  });


  private global!: () => void;

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    getCurrentLocation(this.searchService); // TODO: figure out how to refactor so that you can unsubscribe front the observables in the function
  }

  ngOnDestroy(): void {
    this.global();
  }

  search(): void {
    const searchText: string = this.form.value.search;
    this.searchResults$ = this.searchService.searchByCity(searchText).pipe(
      concatMap(coords => this.searchService.searchByCoodinates(coords))
    );
  }

  // searchByCity(): Observable<DailyWeather> {
  //   return this.searchByCity$.pipe(
  //     concatMap(coords => this.searchService.searchByCoodinates(coords))
  //   );
  // }
  //this.messages.showErrors(errorMessage); ---
}
