import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BusinessComponent } from './business.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {
}
