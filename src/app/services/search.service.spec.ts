import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { SearchService } from './search.service';
import { ErrorsService } from './errors.service';
import { WEATHER_MOCK_DATA } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

const searchQueryTest = {
  coordinates: { lat: -33.9342, lon: 18.4112 },
  cityName: 'Cape Town',
  notFound: 'No Results'
};

const searchParamsTest = {
  coordinates: 'lat=-33.9342&lon=18.4112',
  cityName: 'q=Cape%20Town',
  notFound: 'q=No%20Results'
};

const testApiUrl = (params: string) => `${environment.Api.URL}/forecast?${params}&appid=${environment.Api.KEY}`;

describe('SearchService', () => {

  let searchService: SearchService;
  let httpTestingController: HttpTestingController;
  let errorSpy: any;

  beforeEach(() => {
    errorSpy = jasmine.createSpyObj('ErrorsService', ['displayMessage']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SearchService,
        { provide: ErrorsService, useValue: errorSpy }
      ]
    });
    searchService = TestBed.inject(SearchService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(searchService).toBeTruthy();
  });

  it('should return a Weather data object from a city name query', (done: DoneFn) => {

    searchService.weatherSearch(searchQueryTest.cityName).subscribe(data => {
      const { coord, timezone } = data.city;
      expect(data).withContext('No weather data').toBeTruthy();
      expect(timezone).withContext('No timezone found').toBe(7200);
      expect(coord).withContext('No coordinates found').toEqual(searchQueryTest.coordinates);
      done();
    });

    const req = httpTestingController.expectOne(testApiUrl(searchParamsTest.cityName));
    expect(req.request.method).toEqual('GET');
    req.flush(WEATHER_MOCK_DATA);

  });

  it('should return a Weather data object from a location coordinates query', (done: DoneFn) => {

    searchService.weatherSearch(searchQueryTest.coordinates).subscribe(data => {
      const { name, timezone } = data.city;
      expect(data).withContext('No weather data').toBeTruthy();
      expect(name).withContext('No city name found').toBe(searchQueryTest.cityName);
      expect(timezone).withContext('No timezone found').toBe(7200);
      done();
    });

    const req = httpTestingController.expectOne(testApiUrl(searchParamsTest.coordinates));
    expect(req.request.method).toEqual('GET');
    req.flush(WEATHER_MOCK_DATA);

  });

  it('should show an error when the search input data is wrong', () => {

    searchService.weatherSearch(searchQueryTest.notFound).subscribe(
      () => fail('the searched city is not found'),

      (error: HttpErrorResponse) => {
        const _errorHandlerMethod = searchService['handleError'](error);
        expect(error.status).toBe(404);
        expect(errorSpy.displayMessage).withContext('Errors Service method: Called more than once or not at all').toHaveBeenCalledTimes(1);
        expect(errorSpy.displayMessage).withContext('Errors Service method: Could not show error message').toContain('An error occurred');
        expect(_errorHandlerMethod).withContext('Private Errors Method: Could not show error message').toContain('Server returned code: 404');
      });

    const req = httpTestingController.expectOne(testApiUrl(searchParamsTest.notFound));
    expect(req.request.method).toEqual('GET');
    req.flush('Get weather data failed', { status: 404, statusText: 'city not found' });

  });

  // Testing private method
  it('should filter weather response data returning only city and list data', () => {
    const filteredWeatherData = searchService['getFilteredData'](WEATHER_MOCK_DATA);
    expect(filteredWeatherData.list?.length).withContext('Could not log list total').toBe(40);
    expect(Object.keys(filteredWeatherData)).withContext('Could not filter data').toEqual(['city', 'list']);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
