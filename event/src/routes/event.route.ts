import { Router } from 'express';
import { Request, Response } from 'express';

import { logger } from '../utils/logger.utils';
import CustomError from '../errors/custom.error';

const eventRouter: Router = Router();

eventRouter.post('/', async (request: Request, response: Response) => {
  logger.info('Event message received');
  // Check request body
  if (!request.body) {
    logger.error('Missing request body.');
    throw new CustomError(400, 'Bad request: No Pub/Sub message was received');
  }

  // Check if the body comes in a message
  if (!request.body.message) {
    logger.error('Missing body message');
    throw new CustomError(400, 'Bad request: Wrong No Pub/Sub message format');
  }

  const payload: any = JSON.parse(
    Buffer.from(request.body.message.data, 'base64').toString('utf8').trim()
  ).data;

  response.status(200);
  response.send(payload);
});

export default eventRouter;
