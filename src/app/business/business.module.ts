import { NgModule } from '@angular/core';

import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business.routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeModule } from '../cityfun/shared/theme/theme.module';



@NgModule({
	imports: [
		BusinessRoutingModule,
		ThemeModule,
		DashboardModule
	],
	declarations: [
		BusinessComponent,
	],
})
export class BusinessModule {
}
