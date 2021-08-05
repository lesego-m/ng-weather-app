import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { ErrorMessagesComponent } from './error-messages.component';

describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessagesComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ErrorMessagesComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
      fixture.detectChanges();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call the close message method', () => {
    expect(component.close()).withContext('Failed to display error message').toMatch('');
    expect(component.showError).toBeFalse();
  });

  it('should get the error message', fakeAsync(() => {
    component.errorMessage$.subscribe(message => {
      expect(message).toBeTruthy();
    });
    flush();
  }));

  it('should display the error message', () => {
    component.errorMessage$ = of('Error message');
    component.showError = true;
    fixture.detectChanges();
    const errors = element.query(By.css('.alert-danger')).nativeElement.textContent.trim();
    expect(errors).withContext('Could show errors').toBeTruthy();
    expect(errors).withContext('Incorrect day format').toBe('Oops! Error message');
  });

});
