import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SysManageComponent } from './SysManage.component';
import { DataDictComponent } from './DataDict/DataDict.component';
import { UserManageComponent } from './UserManage/UserManage.component';


const routes: Routes = [
  {
    path: '',
    component: SysManageComponent,
    children: [
      {
        path: 'datadict',
        component: DataDictComponent,
      },
      {
        path: 'usermanage',
        component: UserManageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SysManageRoute {}
