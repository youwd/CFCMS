import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResPoolingComponent } from './ResPooling.component';
import { ResRegisterComponent } from './ResRegister/ResRegister.component';
import { AccessControlComponent } from './AccessControl/AccessControl.component';
import { LogMonitorComponent } from './LogMonitor/LogMonitor.component';

const routes: Routes = [
  {
    path: '',
    component: ResPoolingComponent,
    children: [
      {
        path: 'resregister',
        component: ResRegisterComponent,
      },
      {
        path: 'accesscontrol',
        component: AccessControlComponent,
      },
      {
        path: 'logmonitor',
        component: LogMonitorComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ResPoolingRouting { }
