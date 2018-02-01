import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResRegisterComponent } from './ResRegister.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResRegisterComponent],
  exports:[
    ResRegisterComponent
  ]
})
export class ResRegisterModule { }