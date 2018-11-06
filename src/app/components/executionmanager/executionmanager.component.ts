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
  
  private executionFolders: ExecutionFolder[];

  constructor(private executionService: ExecutionManagerService) { }

  ngOnInit(): void {
    this.executionService.getExecutionFolders()
      .subscribe(data => this.executionFolders = data, (err: any) => console.log(err), () => console.log(this.executionFolders));
    ;
  }
    public  onNodeClick(event: any): void {
    console.log(event.item.dataItem);
  }
  //onClick folder
  public onClickFolder() {
    return;
  }
  
  


    // this.executionService.getExecutionFolders().subscribe(resp => 
    //   {
    //     this.executionFolders = resp.map(item =>
    //       <ExecutionFolder>{
    //         noderef: item.noderef, subProjectId: item.subProjectId, parentId: item.parentId, name: item.name, description: item.description
    //       })
    //   })
  

}
