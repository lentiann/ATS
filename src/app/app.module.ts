import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartComponent } from './components/chart/chart.component';
import { TestmanagerComponent } from './components/testmanager/testmanager.component';
import { ExecutionmanagerModule } from './components/executionmanager/executionmanager.module';
import { ChartModule } from './components/chart/chart.module';
import { TestmanagerModule } from './components/testmanager/testmanager.module';




@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule,
    BrowserAnimationsModule,
    InputsModule,
    ExecutionmanagerModule,
    ChartModule,
    TestmanagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
