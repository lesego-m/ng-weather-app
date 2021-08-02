import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorsService } from 'src/app/services/errors.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {

  public showError: boolean = false;
  public errorMessage$!: Observable<string>;

  constructor(private errorsService: ErrorsService) {

  }

  ngOnInit(): void {
    this.errorMessage$ = this.errorsService.errors$
      .pipe(
        tap(() => this.showError = true)
      );
  }

  close(): void {
    this.showError = false;
  }
}
