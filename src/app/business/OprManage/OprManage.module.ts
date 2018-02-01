import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OprManageComponent } from './OprManage.component';
import { OprManageRoutes } from './OprManage.routing';
import { UserMonitorModule } from './UserMonitor/UserMonitor.module';
import { ServerMonitorModule } from './ServerMonitor/ServerMonitor.module';
import { RequesterMonitorModule } from './RequesterMonitor/RequesterMonitor.module';


@NgModule({
  imports: [
    CommonModule,
    OprManageRoutes,
    UserMonitorModule,
    ServerMonitorModule,
    RequesterMonitorModule
  ],
  declarations: [OprManageComponent]
})
export class OprManageModule { }