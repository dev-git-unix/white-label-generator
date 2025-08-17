import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import { requestLogger } from './middlewares/requestLogger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { env } from './config/env.js';

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: '2mb' }));
app.use(requestLogger);

app.use('/api', routes);

// 404
app.use((_req, res) => res.status(404).json({ error: 'Not Found' }));

// Errors
app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`[generator-backend] listening on http://localhost:${env.port}`);
});

