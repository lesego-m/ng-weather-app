import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { WeatherResponse, DailyWeather, CoodinatesResponse, Coodinates, Api } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly API_key: string = Api.KEY;
  private readonly WEATHER_API: string = Api.URL;
  public timezone!: number;
  constructor(private http: HttpClient) { }

  public searchByCity(city: string): Observable<Coodinates> {

    const searchParameters = new HttpParams().set('q', city).set('appid', this.API_key);

    return this.http.get<CoodinatesResponse>(`${this.WEATHER_API}/weather`, { params: searchParameters }).pipe(
      tap(res => this.timezone = res['timezone']),
      map(res => res.coord),
      catchError(this.handleError),
      tap(console.log),
      shareReplay()
    );
  }

  public searchByCoodinates(coords: Coodinates): Observable<DailyWeather[]> {
    const searchParameters = new HttpParams().set('lon', coords.lon).set('lat', coords.lat).set('exclude', 'current, minutely, hourly, alerts').set('appid', this.API_key);

    return this.http.get<WeatherResponse>(`${this.WEATHER_API}/onecall`, { params: searchParameters }).pipe(
      map(res => res.daily.slice(0, 5).map((data: DailyWeather) => this.getFilteredData(data))),
      // map(res => res?.daily),
      // filter((day, idx) => { if(idx < 5) return day; }),
      catchError(this.handleError),
      tap(console.log),
      shareReplay()
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    // TODO print this error to the UI
    return throwError(errorMessage);
  }

  private getFilteredData(weatherData: DailyWeather): Partial<DailyWeather> {
    const { dt, temp, weather } = weatherData;
    return { dt, temp, weather };
  }

}
