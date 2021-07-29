import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { DailyWeather } from 'src/app/models';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults$!: Observable<DailyWeather>;

  public form: FormGroup = this.formBuilder.group({
    search: ['', [Validators.required, Validators.pattern(/^[a-z\sA-Z]+$/)]]
  });

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    const searchText = this.form.value.search || 'lagos';
    this.searchResults$ = this.searchService.searchByCity(searchText).pipe(
      concatMap(coords => this.searchService.searchByCoodinates(coords))
    );
  }
  //this.messages.showErrors(errorMessage); ---
}
