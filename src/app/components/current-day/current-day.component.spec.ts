import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsModule } from 'src/app/modules/icons/icons.module';
import { By } from '@angular/platform-browser';
import { ConvertDatePipe } from 'src/app/pipes/convert-date.pipe';
import { IconsPipe } from 'src/app/pipes/icons.pipe';
import { TemperaturePipe } from 'src/app/pipes/temperature.pipe';
import { WEATHER_MOCK_DATA } from 'src/app/models';

import { CurrentDayComponent } from './current-day.component';

describe('CurrentDayComponent', () => {
  let component: CurrentDayComponent;
  let fixture: ComponentFixture<CurrentDayComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsModule],
      declarations: [
        CurrentDayComponent,
        ConvertDatePipe,
        TemperaturePipe,
        IconsPipe
       ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CurrentDayComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
      component.today = WEATHER_MOCK_DATA.list[0];
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current day', () => {
    const today = element.queryAll(By.css('.current-day'));
    expect(today).withContext('Could not load current day to the UI').toBeTruthy();
    expect(today.length).withContext('Incorrect number of days').toBe(1);
  });

  it('should display current day details', () => {
    const title = element.query(By.css('.current-day__title')).nativeElement.textContent.trim();
    const date = element.query(By.css('.current-day__date')).nativeElement.textContent.trim();
    const icon = element.query(By.css('.current-day__icon>svg')).nativeElement.getAttribute('data-icon');
    const temperature = element.query(By.css('.current-day__temp')).nativeElement.textContent.trim();
    const description = element.query(By.css('.current-day_description')).nativeElement.textContent.trim();
    const feelsLike = element.query(By.css('.current-day__feels-like')).nativeElement.textContent.trim();

    expect(title).withContext('Incorrect day shown').toBe('Current Weather');
    expect(date).withContext('Incorrect day shown').toBe('Tue 3 Aug 2021');
    expect(icon).withContext('Incorrect icon name').toBe('cloud');
    expect(temperature).withContext('Incorrect temperature').toBe('13 °C');
    expect(description).withContext('Incorrect weather description').toBe('broken clouds');
    expect(feelsLike).withContext(`Incorrect 'feels like' temperature`).toBe('Feels Like 13 °C');
  });

});
