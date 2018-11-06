import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from "@angular/http";

import { Observable, throwError } from 'rxjs';
import { ExecutionFolder } from 'src/app/shared/interfaces/execution-folder';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HandleErrorService } from './handle-error.service';


@Injectable({
  providedIn: 'root'
})
export class ExecutionManagerService {

  private baseUrl = 'http://192.168.1.167:99/api';

  constructor(private http: HttpClient, private errorService: HandleErrorService ) { }

  getExecutionFolders(): Observable<ExecutionFolder[]> {
    return this.http.get<ExecutionFolder[]>(this.baseUrl + '/ExecutionFolders')
      .pipe(
        catchError(this.errorService.handleError)
      );
  }
 

  // getUsers(): Observable<ExecutionFolder[]> {

  //   return this.varg = this.http.get<ExecutionFolder[]>(this.baseUrl + '/ExecutionFolders') 
  //     .map(exfolder =>
  //       exfolder.map(executionFolder =>
  //        <ExecutionFolder>{ noderef: executionFolder.noderef, subProjectId: executionFolder.subProjectId,
  // parentId: executionFolder.parentId, name: executionFolder.name, description: executionFolder.description }
  //       )
  //     );
  // }
 
}
