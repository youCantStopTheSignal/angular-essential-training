// import decorators, components, pipes
import { Component, Input } from '@angular/core';

@Component ({
				selector:  'mw-media-item',
				templateUrl:  './media-item.component.html',
				styleUrls: ['./media-item.component.css']	
}) 

export class MediaItemComponent{
	// create property mediaItem
	// use the "input" decorator to support any property bindings place on instances of the mw-media-item element where the property name is 'mediaItem'
	// 		(expose component properties--[mediaItem]=)
	@Input() mediaItem;
	
	// delete function called from html
	onDelete() {
		console.log("deleted");
	}
}
