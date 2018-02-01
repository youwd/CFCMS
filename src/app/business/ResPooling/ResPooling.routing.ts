import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResPoolingComponent } from './ResPooling.component';
import { ResRegisterComponent } from './ResRegister/ResRegister.component';

const routes: Routes = [
  {
    path: '',
    component: ResPoolingComponent,
    children: [{
      path: 'resregister',
      component: ResRegisterComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ResPoolingRouting { }
