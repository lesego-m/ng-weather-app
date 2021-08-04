import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './modules/icons/icons.module';

import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { ErrorsService } from './services/errors.service';
import { IconsPipe } from './pipes/icons.pipe';
import { ConvertDatePipe } from './pipes/convert-date.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { SearchComponent } from './components/search/search.component';
import { CurrentDayComponent } from './components/current-day/current-day.component';
import { FutureDaysComponent } from './components/future-days/future-days.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';

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
    IconsModule
  ],
  providers: [
    SearchService,
    ErrorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
