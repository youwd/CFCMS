import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResManageComponent } from './ResManage.component';
import { DataManageComponent } from './DataManage/DataManage.component';
import { ResCatalogComponent } from './ResCatalog/ResCatalog.component';
import { ResStatusComponent } from './ResStatus/ResStatus.component';


const routes: Routes = [
  {
    path: '',
    component: ResManageComponent,
    children: [
      {
        path: 'datamanage',
        component: DataManageComponent,
      },
      {
        path: 'rescatalog',
        component: ResCatalogComponent,
      },
      {
        path: 'resstatus',
        component: ResStatusComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ResManageRoutes { }
