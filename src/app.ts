import cors from 'cors';
import express from 'express';
import { internalServerError } from './errors/internalServerError';
import { pageNotFound } from './errors/pageNotFound';
import { IndexRouter } from './routes/Index.router';

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(IndexRouter);

// Error handling
app.use(pageNotFound);
app.use(internalServerError);

export { app };
