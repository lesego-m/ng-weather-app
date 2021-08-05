import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WEATHER_MOCK_DATA } from 'src/app/models';
import { IconsModule } from 'src/app/modules/icons/icons.module';
import { ConvertDatePipe } from 'src/app/pipes/convert-date.pipe';
import { IconsPipe } from 'src/app/pipes/icons.pipe';
import { TemperaturePipe } from 'src/app/pipes/temperature.pipe';
import { FutureDaysComponent } from './future-days.component';

describe('FutureDaysComponent', () => {
  let component: FutureDaysComponent;
  let fixture: ComponentFixture<FutureDaysComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [IconsModule],
      declarations: [
        FutureDaysComponent,
        ConvertDatePipe,
        TemperaturePipe,
        IconsPipe
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(FutureDaysComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display future days list', () => {
    component.days = WEATHER_MOCK_DATA.list;
    fixture.detectChanges();
    const futureDays = element.queryAll(By.css('.future-day'));
    expect(futureDays).withContext('Could not load days to the UI').toBeTruthy();
    expect(futureDays.length).withContext('Incorrect number of days').toBe(5);
  });

  it(`should display the first day on the list as 'Today'`, () => {

    component.days = WEATHER_MOCK_DATA.list;
    fixture.detectChanges();

    const futureDay = element.query(By.css('.future-day:first-child'));
    const futureDayDate = futureDay.query(By.css('.future-day__date'));
    const today = futureDayDate.nativeElement.textContent.trim();

    expect(futureDay).withContext('Could not render first day to the UI').toBeTruthy();
    expect(today).withContext('Incorrect day format').toBe('Today');
  });

  it('should display the last day on the list', () => {

    component.days = WEATHER_MOCK_DATA.list;
    fixture.detectChanges();
    const futureDay = element.query(By.css('.future-day:last-child'));
    const date = futureDay.query(By.css('.future-day__date')).nativeElement.textContent.trim();
    const icon = futureDay.query(By.css('.future-day__icon>svg')).nativeElement.getAttribute('data-icon');
    const maxTemp = futureDay.query(By.css('.future-day__max-temp')).nativeElement.textContent.trim();
    const minTemp = futureDay.query(By.css('.future-day__min-temp')).nativeElement.textContent.trim();

    expect(futureDay).withContext('Could not render last day to the UI').toBeTruthy();
    expect(date).withContext(`Incorrect day shown`).toBe('Sat 7');
    expect(icon).withContext('Incorrect icon name').toBe('cloud-sun');
    expect(maxTemp).withContext('Incorrect maximum temperature').toBe('12 °C');
    expect(minTemp).withContext('Incorrect min temperature').toBe('12 °C');
  });
});
