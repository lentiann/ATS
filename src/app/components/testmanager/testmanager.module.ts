import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmanagerRoutingModule } from './testmanager-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { HttpModule } from '@angular/http';
import { TestmanagerComponent } from './testmanager.component';
import { TestManagerService } from 'src/app/core/services/test-manager.service';

@NgModule({
  imports: [
    CommonModule,
    TestmanagerRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TreeViewModule,
    HttpModule
  ],
  declarations: [ TestmanagerComponent ],
  exports: [ TestmanagerComponent ],
  providers: [ TestManagerService ]

})
export class TestmanagerModule { }
