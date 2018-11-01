import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionManagerService } from './services/execution-manager.service';
import { TestManagerService } from './services/test-manager.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ ExecutionManagerService , TestManagerService ]
})
export class CoreModule { }
