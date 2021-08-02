import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  private subject = new BehaviorSubject<string>('');

  public errors$: Observable<string> = this.subject.asObservable().pipe(
    filter(errors => errors.length > 0)
  );

  displayMessage(errors: string) {
    this.subject.next(errors);
  }
}
