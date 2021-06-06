import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';
import { logger } from '..';

import DataRouter from './routes/dataRoute';

export function startApi() {
	const app = express();
	app.use(cors());
	app.use(bodyParser.json());

	app.use(morgan('dev'));
	app.use(compression());

    app.use('/data', DataRouter);

	app.listen(8080, () => {
		logger.info('API listening on port 8080');
	});
}
