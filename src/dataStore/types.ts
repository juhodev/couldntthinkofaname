export type TracingEvent = {
	name: string;
	cat: string;
	ph: EventType;
	pid: number;
	tid: number;
	ts: number;
};

export type ChromeTracingObject = {
	displayTimeUnit: string;
	traceEvents: TracingEvent[];
};

export enum EventType {
	BEGIN = 'B',
	END = 'E',
	COMPLETE = 'X',
	INSTANT = 'i',
	COUNTER = 'C',
	ASYNC_NESTABLE_START = 'b',
	ASYNC_NESTABLE_INSTANT = 'n',
	ASYNC_NESTABLE_END = 'e',
	FLOW_START = 's',
	FLOW_STEP = 't',
	FLOW_END = 'f',
	SAMPLE = 'P',
	OBJECT_CREATED = 'N',
	OBJECT_SNAPSHOT = 'O',
	OBJECT_DESTROYED = 'D',
	METADATA = 'M',
	MEMODY_DUMP_GLOBAL = 'V',
	MEMORY_DUMP_PROCESS = 'v',
	MARK = 'c',
}
