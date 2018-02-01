import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SerPublishComponent } from './SerPublish/SerPublish.component';
import { SerSearchComponent } from './SerSearch/SerSearch.component';
import { SerShareComponent } from './SerShare/SerShare.component';
import { ResShareComponent } from './ResShare.component';



const routes: Routes = [
  {
    path: '',
    component: ResShareComponent,
    children: [
      {
        path: 'serpublish',
        component: SerPublishComponent,
      },
      {
        path: 'sersearch',
        component: SerSearchComponent,
      },
      {
        path: 'sershare',
        component: SerShareComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ResShareRoutes { }
