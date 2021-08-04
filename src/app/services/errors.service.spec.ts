import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ErrorsService } from './errors.service';
import { SearchService } from './search.service';

describe('ErrorsService', () => {
  let service: ErrorsService;
  let fakeSearchService: Pick<SearchService, keyof SearchService>;
  const searchTerm = 'Not Found';

  beforeEach(() => {
    fakeSearchService = { weatherSearch: jasmine.createSpy('weatherSearch').and.returnValue(of(searchTerm))};

    TestBed.configureTestingModule({
      providers: [
        ErrorsService,
        { provide: SearchService, useValue: fakeSearchService }
      ]});
    service = TestBed.inject(ErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 404 message when city is not found', (done: DoneFn) => {

    expect(service.errors$).withContext('No error messages').toBeTruthy();
    service.errors$.subscribe(message => {
      expect(message).withContext('Failed to retrieve error message').toBeTruthy();
      expect(message).withContext('Errors Service method: Could not show error message').toContain('An error occurred 404');
    });
    done();
  });
});
