import * as winston from 'winston';
import DataStore from './dataStore/dataStore';
import { startApi } from './api/api';

export const logger = winston.createLogger({
	level: 'debug',
	format: winston.format.simple(),
	transports: [new winston.transports.Console()],
});

export const dataStore = new DataStore();
startApi();
