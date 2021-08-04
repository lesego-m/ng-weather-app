import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { WEATHER_MOCK_DATA } from 'src/app/models';
import { SearchService } from 'src/app/services/search.service';

import { SearchComponent } from './search.component';

xdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: any;

  beforeEach(async () => {
    searchService = jasmine.createSpyObj('SearchService', ['weatherSearch']);
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ SearchComponent ],
      providers: [
        { provide: SearchService, useValue: searchService }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the search form', () => {
    component.searchResults$ = of(WEATHER_MOCK_DATA);
  });

  it('should display search results', () => {
    pending();
  });

  it('should trigger browser geolocation', () => {
    pending();
  });
});
