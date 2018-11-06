import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestmanagerComponent } from './testmanager.component';

const routes: Routes = [
  { path: 'TestManager', component: TestmanagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmanagerRoutingModule { }
