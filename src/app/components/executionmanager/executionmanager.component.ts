import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExecutionFolder } from 'src/app/shared/interfaces/execution-folder';
import { ExecutionManagerService } from 'src/app/core/services/execution-manager.service';
import { SubProject } from 'src/app/shared/interfaces/sub-project';
import { TestFolder } from 'src/app/shared/interfaces/test-folder';

@Component({
  selector: 'app-executionmanager',
  templateUrl: './executionmanager.component.html',
  styleUrls: ['./executionmanager.component.css']
})
export class ExecutionmanagerComponent implements OnInit {
  public executionFolders: Observable<ExecutionFolder[]>;
  // public executionFolders: ExecutionFolder[];
  varg: any;
  constructor(private executionService: ExecutionManagerService) { }

  ngOnInit(): void {
    this.executionService.getExecutionFolders()
    .subscribe(data => this.varg = data,(err: any)=> console.log(err),() => console.log(this.varg));
    ;
    

    // this.executionService.getExecutionFolders().subscribe(resp => 
    //   {
    //     this.executionFolders = resp.map(item =>
    //       <ExecutionFolder>{
    //         noderef: item.noderef, subProjectId: item.subProjectId, parentId: item.parentId, name: item.name, description: item.description
    //       })
    //   })
  }

}
