import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResPoolingComponent } from './ResPooling.component';

import { ResPoolingRouting } from './ResPooling.routing';
import { ResRegisterModule } from './ResRegister/ResRegister.module';
import { AccessControlModule } from './AccessControl/AccessControl.module';
import { LogMonitorModule } from './LogMonitor/LogMonitor.module';


@NgModule({
  imports: [
    CommonModule,
    ResPoolingRouting,
    ResRegisterModule,
    AccessControlModule,
    LogMonitorModule
  ],
  declarations: [
    ResPoolingComponent
  ]
})
export class ResPoolingModule { }