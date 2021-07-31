import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { WeatherApiResponse, ForecastAndTimezone, Coodinates } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly API_key: string = environment.Api.KEY;
  private readonly WEATHER_API: string = environment.Api.URL;

  constructor(private http: HttpClient) { }

  public weatherSearch(search: string | Coodinates): Observable<ForecastAndTimezone> {
    const cityNameOrCoords = typeof search === 'string' ? { q: search } : { ...search } = search;
    const searchParameters = new HttpParams().appendAll({ ...cityNameOrCoords, 'appid': this.API_key });

    return this.http.get<WeatherApiResponse>(`${this.WEATHER_API}/forecast?`, { params: searchParameters }).pipe(
      map(this.getFilteredData),
      catchError(this.handleError),
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

  private getFilteredData(res: WeatherApiResponse): ForecastAndTimezone {
    const { list, city } = res;
    const { timezone } = city;
    return { city, list, timezone };
  }

}
