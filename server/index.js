
import express from 'express';
import morgan from 'morgan';
import { connectDB } from './database/db.js';

const app = express();
app.use(morgan('dev'));

connectDB();
app.listen(4000)
console.log('Servidor en puerto', 4000);

export default app;