import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { from, of } from 'rxjs';
import { IconsModule } from 'src/app/modules/icons/icons.module';
import { WEATHER_MOCK_DATA } from 'src/app/models';
import { SearchService } from 'src/app/services/search.service';

import { SearchComponent, NAVIGATOR } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let fakeSearchService: Pick<SearchService, keyof SearchService>;
  let element: DebugElement;

  const searchTerm = 'Cape Town';

  beforeEach(async () => {
    fakeSearchService = { weatherSearch: jasmine.createSpy('weatherSearch').and.returnValue(of(WEATHER_MOCK_DATA))};

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, IconsModule],
      declarations: [SearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        [{ provide: NAVIGATOR, useValue: window.navigator }],
        { provide: SearchService, useValue: fakeSearchService }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger browser geolocation on init', (done: DoneFn) => {

    from(navigator.permissions.query({name:'geolocation'})).subscribe(location => {
      expect(location.state).withContext('Geolocation was not triggered').toBeTruthy();
    });

    done();

  });

  it('should display the search form', () => {

    fixture.detectChanges();

    const searchForm = element.query(By.css('form'));
    expect(searchForm).withContext('Missing the search form').toBeTruthy();

  });

  it('should successfully search by city name', () => {

    fixture.detectChanges();

    const searchForm = element.query(By.css('form'));
    const searchValues = component.form.setValue({ search: searchTerm});
    searchForm.triggerEventHandler('submit', searchValues);
    expect(fakeSearchService.weatherSearch).withContext('Search by city name failed').toHaveBeenCalledOnceWith(searchTerm);

  });

  it('should show search results', () => {

    component.searchResults$ = of(WEATHER_MOCK_DATA);

    fixture.detectChanges();

    const currentDay = element.query(By.css('app-current-day'));
    const futureDays = element.query(By.css('app-future-days'));
    const title = element.query(By.css('h2')).nativeElement.textContent.trim();

    expect(currentDay).withContext('Missing Current day').toBeTruthy();
    expect(futureDays).withContext('Missing Future days').toBeTruthy();
    expect(title).withContext('Missing city name').toBeTruthy();
    expect(title).withContext(`Incorrect city name shown`).toBe('Cape Town, ZA');

  });

});
