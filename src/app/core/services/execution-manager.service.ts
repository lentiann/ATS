import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from "@angular/http";

import { Observable, throwError } from 'rxjs';
import { ExecutionFolder } from 'src/app/shared/interfaces/execution-folder';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ExecutionManagerService {

  private baseUrl = 'http://192.168.1.167:99/api';

  constructor(private http: HttpClient) { }

  getExecutionFolders(): Observable<ExecutionFolder[]> {
    return this.http.get<ExecutionFolder[]>(this.baseUrl + '/ExecutionFolders')
      .pipe(
        catchError(this.handleError)
      );
  }
 

  // getUsers(): Observable<ExecutionFolder[]> {

  //   return this.varg = this.http.get<ExecutionFolder[]>(this.baseUrl + '/ExecutionFolders') 
  //     .map(exfolder =>
  //       exfolder.map(executionFolder =>
  //        <ExecutionFolder>{ noderef: executionFolder.noderef, subProjectId: executionFolder.subProjectId, parentId: executionFolder.parentId, name: executionFolder.name, description: executionFolder.description }
  //       )
  //     );
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
