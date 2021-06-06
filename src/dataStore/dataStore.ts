import { Event } from '../api/routes/types';
import { ChromeTracingObject, TracingEvent } from './types';

class DataStore {
	private data: ChromeTracingObject;
	private start: number;

	constructor() {
		this.data = {
			displayTimeUnit: 'ms',
			traceEvents: [],
		};

		this.start = -1;
	}

	save(event: Event) {
		if (this.start === -1) {
			this.start = new Date().getTime();
		}
        
		const sinceStart: number = event.timestamp - this.start;
		this.add({
			cat: 'PERF',
			name: event.name,
			ph: event.type,
			pid: 0,
			tid: 0,
			ts: sinceStart,
		});
	}

	private add(tracingEvent: TracingEvent) {
		tracingEvent.ts = tracingEvent.ts * 1000;
		this.data.traceEvents.push(tracingEvent);
	}

	toString(): string {
		return JSON.stringify(this.data);
	}
}

export default DataStore;
