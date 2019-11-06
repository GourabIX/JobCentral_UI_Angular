import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  postLogin(login: Login):Observable<Login>
  {
    return this.http.post<Login>('http://localhost:8989/login', login).pipe(catchError(this.errorHandler));

  }

  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message || 'Whoops! Seems something like a Server Error. :(');
  }

}
