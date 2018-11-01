import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { TreeviewRoutingModule } from './treeview-routing.module';
import { TreeviewComponent as tree } from './treeview.component';
import { TreeviewService } from './treeview.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TreeviewRoutingModule,
    BrowserAnimationsModule,
    TreeViewModule,
    HttpClientModule
  ],
  declarations: [tree],
  exports: [
    tree
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [TreeviewService]
})
export class TreeviewModule { }
