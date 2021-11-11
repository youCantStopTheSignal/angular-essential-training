// notify Angular that this is an Angular module
import { NgModule } from '@angular/core';

// mae the HTTP module available
import { BrowserModule } from '@angular/platform-browser';

// the starting component is part of this project, so has a relative directory path
import { AppComponent } from './app.component';

import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';

@NgModule({
	imports: [					// load dependencies
				BrowserModule	// available because of the above import				
	],				
	declarations: [				// load components, directives and pipes that are not present in another module
				AppComponent,	// available because of the above import
				MediaItemComponent,
    			MediaItemListComponent
	],			
	bootstrap: [				// load components, directives and pipes that are not present in another module
				AppComponent	// available because of the above import
	]
})

// this class will be imported into another file
export class AppModule {}
