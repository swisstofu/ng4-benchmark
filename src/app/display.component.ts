import {
	ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges,
	ViewChild
} from '@angular/core';
import { Display } from './display.model';
@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnChanges {
	@Input() display: Display;

	@ViewChild('span') spanChild: ElementRef;

	constructor(private elementRef: ElementRef) {
	}

	ngOnChanges(changes: SimpleChanges): void {
		// if (changes.display && this.display) {
		// 	if (!this.spanChild) {
		// 		const span = document.createElement('span');
		// 		span.innerText = this.display.id + '';
		// 		this.elementRef.nativeElement.appendChild(span);
		// 		this.spanChild = new ElementRef(span);
		// 	} else {
		// 		this.spanChild.nativeElement.innerText = this.display.id;
		// 	}
		// }
	}
}
