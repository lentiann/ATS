import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionmanagerRoutingModule } from './executionmanager-routing.module';
import { ExecutionmanagerComponent } from './executionmanager.component';
import { HttpClientModule } from '@angular/common/http';
import { ExecutionManagerService } from 'src/app/core/services/execution-manager.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ExecutionmanagerRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TreeViewModule,
    HttpModule
  ],
  declarations: [ExecutionmanagerComponent],
  exports: [
    ExecutionmanagerComponent
  ],
  providers: [ ExecutionManagerService ]
})
export class ExecutionmanagerModule { }
