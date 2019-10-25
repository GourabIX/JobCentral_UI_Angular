import { Injectable } from '@angular/core';
import { Job } from './job';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  
  getJobs():Observable<Job[]>
  {
    return this.http.get<Job[]>('');
  }

  addJob(job: Job):Observable<Job>
  {
    return this.http.post<Job>('', job).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message || 'Whoops! Seems something like a Server Error. :(');
  }
  
}
