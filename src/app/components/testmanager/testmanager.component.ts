import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TestManagerService } from 'src/app/core/services/test-manager.service';


import { TestFolder } from 'src/app/shared/interfaces/test-folder';
import { SubFolder } from 'src/app/shared/interfaces/sub-folder';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-testmanager',
  templateUrl: './testmanager.component.html',
  styleUrls: ['./testmanager.component.css']
})
export class TestmanagerComponent implements OnInit {
  public testFolders: Observable<any[]>;

  constructor(private testManagerService: TestManagerService) { }

  public ngOnInit(): void {
    this.testFolders = this.testManagerService.getTestFolders();
  }

  public hasChildren = (item: any) => 'name' in item;
  public fetchChildren = (item: any) => this.testManagerService.getSubFolders(item.noderef);

  // public fetchChildren = (item: any) => this.testManagerService.getTestCases(item.noderef);
  
  // public fetchChildren = (item: any) => this.testManagerService.getTestCasesAndSubFolders(item.noderef);



}
