import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutionmanagerComponent } from './executionmanager.component';

const routes: Routes = [
  { path: 'ExecutionManager', component: ExecutionmanagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutionmanagerRoutingModule { }
