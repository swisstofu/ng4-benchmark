import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Display } from './display.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	title = 'app';

	matrix: Display[][] = [];
	max = 100;
	size = 200;
	detached = true;

	constructor(private changeDetetorRef: ChangeDetectorRef) {
		if (this.detached) {
			this.changeDetetorRef.detach();
		}
	}

	ngOnInit(): void {
		this.fill();
		this.changeDetection();
	}

	onClick() {
		// setTimeout(() => {
			this.fill(false);
			// this.changeDetection();
			this.matrix[0][0] = new Display(999);
			this.changeDetection();
			// setTimeout(() => this.changeDetection(), 3000);
		// }, 2000);
	}

	private elapsed(time?: number) {
		const now = new Date().getTime()
		if (!time) {
			return now;
		}
		return now - time;
	}

	private changeDetection() {
		if (this.detached) {
			const time = this.elapsed();
			this.changeDetetorRef.detectChanges();
			console.error(`${this.elapsed(time)} ms`)
		}
	}

	private fill(empty = true) {
		this.matrix = [];
		for (let i = 0; i < this.size; i++) {
			this.matrix[i] = [];
			for (let j = 0; j < this.size; j++) {
				this.matrix[i][j] = empty ? undefined : new Display(this.random());
			}
		}
	}

	private random() {
		return Math.floor(Math.random() * this.max);
	}

	trackBy(index) {
		return index;
	}
}
