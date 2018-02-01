import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResShareComponent } from './ResShare.component';
import { SerPublishModule } from './SerPublish/SerPublish.module';
import { SerSearchModule } from './SerSearch/SerSearch.module';
import { SerShareModule } from './SerShare/SerShare.module';
import { ResShareRoutes } from './ResShare.routing';


@NgModule({
  imports: [
    CommonModule,
    ResShareRoutes,
    SerPublishModule,
    SerSearchModule,
    SerShareModule,
  ],
  declarations: [ResShareComponent]
})
export class ResShareModule { }