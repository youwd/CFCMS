import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OprManageComponent } from './OprManage.component';
import { ServerMonitorComponent } from './ServerMonitor/ServerMonitor.component';
import { RequesterMonitorComponent } from './RequesterMonitor/RequesterMonitor.component';
import { UserMonitorComponent } from './UserMonitor/UserMonitor.component';


const routes: Routes = [
  {
    path: '',
    component: OprManageComponent,
    children: [
      {
        path: 'requester',
        component: RequesterMonitorComponent,
      },
      {
        path: 'user',
        component: UserMonitorComponent,
      },
      {
        path: 'server',
        component: ServerMonitorComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OprManageRoutes {}
