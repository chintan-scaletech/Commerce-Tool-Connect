import { Request, Response, Router } from 'express';

import { logger } from '../utils/logger.utils';

const eventRouter: Router = Router();

eventRouter.post('/', async (request: Request, response: Response) => {
  logger.info('request.body', request.body);
  logger.info('request.body JSON.stringify', JSON.stringify(request.body));
  logger.info('request.body JSON.parse', JSON.parse(request.body));
  logger.info('request.body.data', request.body.data);

  const event = request.body;
  console.info('New event received', event);

  response.status(200);
  response.send();
});

export default eventRouter;
