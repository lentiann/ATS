import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeviewComponent } from './treeview/treeview/treeview.component';

const routes: Routes = [
  { path: '', redirectTo: 'tree', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
