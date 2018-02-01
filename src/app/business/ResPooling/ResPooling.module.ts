import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResPoolingComponent } from './ResPooling.component';

import { ResPoolingRouting } from './ResPooling.routing';
import { ResRegisterModule } from './ResRegister/ResRegister.module';

const components = [
  ResPoolingComponent
];

@NgModule({
  imports: [
    CommonModule,
    ResRegisterModule,
    ResPoolingRouting
  ],
  declarations: [
    ...components
  ]
})
export class ResPoolingModule { }