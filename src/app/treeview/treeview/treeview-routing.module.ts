import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeviewComponent } from './treeview.component';

const treeRoutes: Routes = [
  { path: 'tree', component: TreeviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(treeRoutes)],
  exports: [RouterModule]
})
export class TreeviewRoutingModule { }
