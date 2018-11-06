
import { TestFolder } from 'src/app/shared/interfaces/test-folder';
import { HandleErrorService } from './handle-error.service';
import { numberSymbols } from '@telerik/kendo-intl';
import { SubFolder } from 'src/app/shared/interfaces/sub-folder';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators/map';

@Injectable()
export class TestManagerService {

  private baseUrl = 'http://192.168.1.167:99/api';

  constructor(private http: HttpClient) { }

  public getTestFolders(): Observable<any[]> {
    return this.fetch(`${this.baseUrl}/testfolders`);
  }

  public getSubFolders(noderef: number): any {
    return this.fetch(`${this.baseUrl}/testfolders/${noderef}/testfolders`);
  }

  public getTestCases(noderef: number): any {
    return this.fetch(`${this.baseUrl}/testfolders/${noderef}/testcases`);
  }

  // public getTestFolderAndTestCases(noderef: number): any{ 
  //   getSubFolders
  // }

  private fetch(url: string): Observable<any[]> {
    return this.http
      .get(url)
      .pipe(map((response: any) => response));
  }
}
