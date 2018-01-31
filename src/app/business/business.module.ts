import { NgModule } from '@angular/core';

import { BusinessComponent } from './business.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BusinessRoutingModule } from './business.routing.module';
import { ThemeModule } from '../cityfun/shared/theme/theme.module';

const PAGES_COMPONENTS = [
	BusinessComponent,
];

@NgModule({
	imports: [
		BusinessRoutingModule,
		ThemeModule,
		DashboardModule,
	],
	declarations: [
		BusinessComponent,
	],
})
export class BusinessModule {
}
