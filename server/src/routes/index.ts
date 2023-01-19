import { Express } from 'express';

import setupUserRoutes from './user.routes';

export default function setupRoutes(app: Express) {
  setupUserRoutes(app);
}
