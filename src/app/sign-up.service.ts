import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SignUp } from './sign-up';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }
}
