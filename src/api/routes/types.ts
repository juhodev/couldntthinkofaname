import { EventType } from "../../dataStore/types";

export type Event = {
	name: string;
    type: EventType;
	timestamp: number;
};
