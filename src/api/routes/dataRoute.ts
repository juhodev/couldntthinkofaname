import expressPromiseRouter from 'express-promise-router';
import { dataStore } from '../..';

const router = expressPromiseRouter();

router.post('/', (req, res) => {
	const event = req.body;

	dataStore.save(event);
	res.status(200);
});

export default router;
