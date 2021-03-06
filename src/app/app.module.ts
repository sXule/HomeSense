import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
	MatProgressBarModule,
	MatDialogModule,
	MatToolbarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatIconModule,
	MatSidenavModule,
	MatListModule,
	MatGridListModule,
	MatCardModule,
	MatTooltipModule,
	MatStepperModule,
	MatInputModule,
	MatProgressSpinnerModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { SettingsComponent } from './settings/settings.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { NewDeviceComponent } from './new-device/new-device.component';

import { DevicesService } from './devices.service';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/devices',
		pathMatch: 'full'
	},
	{
		path: 'devices',
		component: DevicesComponent
	},
	{
		path: 'devices/new',
		component: NewDeviceComponent
	},
	{
		path: 'devices/:id',
		component: DeviceDetailsComponent
	},
	{
		path: 'settings',
		component: SettingsComponent
	},
	{
		path: 'scenarios',
		component: ScenariosComponent
	},
	// { path: 'hero/:id',      component: HeroDetailComponent },
	// {
	// 	path: 'heroes',
	// 	component: HeroListComponent,
	// 	data: { title: 'Heroes List' }
	// },
	// {
	// 	path: '',
	// 	redirectTo: '/heroes',
	// 	pathMatch: 'full'
	// },
	// {
	// 	path: '**',
	// 	component: PageNotFoundComponent
	// }
];

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
	DeviceDetailsComponent,
    SettingsComponent,
    ScenariosComponent,
    NewDeviceComponent
  ],
  imports: [
	FormsModule,
	ReactiveFormsModule,
    BrowserModule,
	RouterModule.forRoot(
		appRoutes
	),
	BrowserAnimationsModule,
	HttpClientModule,
	MatProgressBarModule,
	MatDialogModule,
	MatToolbarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatIconModule,
	MatSidenavModule,
	MatListModule,
	MatGridListModule,
	MatCardModule,
	MatTooltipModule,
	MatStepperModule,
	MatInputModule,
	MatProgressSpinnerModule,
  ],
  providers: [HttpClient, DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
