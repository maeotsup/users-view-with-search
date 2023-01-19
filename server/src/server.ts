require('dotenv').config();

import express, { Express } from 'express';

import { IGracefulShutdownProps } from './interfaces/server.interfaces';

const { PORT } = process.env;

const app: Express = express();
const port: string | undefined = PORT;

app.use(express.json());

const gracefulShutdown = ({ message, callback }: IGracefulShutdownProps) => {
  console.log(message);
  callback();
};

process.once('SIGUSR2', () => {
  gracefulShutdown({
    message: 'Nodemon restart',
    callback: () => process.kill(process.pid, 'SIGUSR2'),
  });
});

process.on('SIGINT', () => {
  gracefulShutdown({
    message: 'App termination',
    callback: () => process.exit(0),
  });
});

process.on('SIGTERM', () => {
  gracefulShutdown({
    message: 'Hosting app termination',
    callback: () => process.exit(0),
  });
});

app.listen(port, () => {
  console.log('Server listening on port', port);
});
