/*
	entry/bootstrap point for the browser-based application
	
	to start server:
		- open command prompt / cmdr
		- cd C:\Users\rockm\Coding\GitHub\TrainingProjects\angular-essential-training
		- enter:  ng serve
*/


// bootstrap targeting the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

