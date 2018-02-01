import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BusinessComponent } from './business.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
const routes: Routes = [{
  path: '',
  component: BusinessComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'respooling',
      loadChildren: './ResPooling/ResPooling.module#ResPoolingModule',
    },
    {
      path: 'resmanage',
      loadChildren: './ResManage/ResManage.module#ResManageModule',
    }
    ,
    {
      path: 'resshare',
      loadChildren: './ResShare/ResShare.module#ResShareModule',
    }
    ,
    {
      path: 'sysmanage',
      loadChildren: './SysManage/SysManage.module#SysManageModule',
    }
    ,
    {
      path: 'oprmanage',
      loadChildren: './OprManage/OprManage.module#OprManageModule',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {
}
