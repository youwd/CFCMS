import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResManageComponent } from './ResManage.component';
import { ResCatalogModule } from './ResCatalog/ResCatalog.module';
import { ResStatusModule } from './ResStatus/ResStatus.module';
import { DataManageModule } from './DataManage/DataManage.module';
import { ResManageRoutes } from './ResManage.routing';


@NgModule({
  imports: [
    CommonModule,
    ResManageRoutes,
    ResCatalogModule,
    ResStatusModule,
    DataManageModule
  ],
  declarations: [ResManageComponent]
})
export class ResManageModule { }