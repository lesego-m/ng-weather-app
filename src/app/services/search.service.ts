import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Weather, Coodinates } from 'src/app/models';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly API_key: string = environment.Api.KEY;
  private readonly WEATHER_API: string = environment.Api.URL;

  constructor(
    private http: HttpClient,
    private errorsService: ErrorsService) { }

  public weatherSearch(search: string | Coodinates): Observable<Weather> {
    const cityNameOrCoords = typeof search === 'string' ? { q: search } : { ...search } = search;
    const searchParameters = new HttpParams().appendAll({ ...cityNameOrCoords, 'appid': this.API_key });

    return this.http.get<Weather>(`${this.WEATHER_API}/forecast?`, { params: searchParameters }).pipe(
      map(res => this.getFilteredData(res)),
      catchError(err => this.handleError(err)),
      shareReplay()
    );
  }

  private getFilteredData(res: Weather): Weather {
    const { list, city } = res;
    return { city, list };
  }

  private handleError(err: HttpErrorResponse) {
    let userErrorMessage: string = '';

    if (err.error instanceof ErrorEvent) {
      userErrorMessage = `An error occurred: ${err.error.message}`;
    } else {
      userErrorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    this.errorsService.displayMessage(userErrorMessage);
    return throwError(err);
  }

}
