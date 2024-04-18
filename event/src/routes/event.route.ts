import { Request, Response, Router } from 'express';

import { logger } from '../utils/logger.utils';

const eventRouter: Router = Router();

eventRouter.post('/', async (request: Request, response: Response) => {
  logger.info('Event received', request.body);

  response.status(200);
  response.send();
});

export default eventRouter;
