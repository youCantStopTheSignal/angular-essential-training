/*
	Components ARE DIRECTIVES WITG A VIEW
*/
// required to build an Angular component
import { Component } from '@angular/core';

// call the component
@Component ({
				selector: 'mw_app',				// changed for illustrative purposes
//				selector: 'app-root',
				templateUrl:  './app.component.html',	// specify the template in a separate file, rather than here
/*	
				template: `<h1 style="color:white" >
								My App
							</h1>
							<div style="color:white">
								Keeping track of the media I want to watch
							</div>`		// used to identify a custom html element to apply this component to
										// use backwards single quotes to span multiple lines
*/
				styleUrls: ['./app.component.css']
})

// this class will be imported into another file
export class AppComponent{
/*
  // single item replaced with list
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: null,
//    watchedOn: 1294166565384,
    isFavorite: false
  };
*/	
}
