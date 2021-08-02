import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faSnowflake, faCloud, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faBolt, faSmog, faSearch } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { SearchComponent } from './components/search/search.component';
import { ConvertDatePipe } from './pipes/convert-date.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { IconsPipe } from './pipes/icons.pipe';
import { CurrentDayComponent } from './components/current-day/current-day.component';
import { FutureDaysComponent } from './components/future-days/future-days.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { ErrorsService } from './services/errors.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ConvertDatePipe,
    TemperaturePipe,
    IconsPipe,
    CurrentDayComponent,
    FutureDaysComponent,
    ErrorMessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    SearchService,
    ErrorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faSun, faSnowflake, faCloud, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faBolt, faSmog, faSearch);
  }
}
