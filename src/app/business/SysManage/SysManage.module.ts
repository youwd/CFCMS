import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysManageComponent } from './SysManage.component';
import { SysManageRoute } from './SysManage.routing';
import { DataDictModule } from './DataDict/DataDict.module';
import { UserManageModule } from './UserManage/UserManage.module';



@NgModule({
  imports: [
    CommonModule,
    UserManageModule,
    DataDictModule,
    SysManageRoute
  ],
  declarations: [SysManageComponent]
})
export class SysManageModule { }