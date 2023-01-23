import { Express } from 'express';

import { getUsersController } from '../controllers/user.controller';
import { IUsersResponse } from '../interfaces/user.interfaces';

export default function setupUserRoutes(app: Express) {
  app.get(`/api/users`, async (_req, res) => {
    try {
      const response = await getUsersController() as IUsersResponse;
      res
        .status(200)
        .json(response.data);
    } catch (error) {
      res
        .status(500)
        .json({ error });
    }
  });
}