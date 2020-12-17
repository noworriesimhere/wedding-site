import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import commentRoutes from './routes/commentRoutes.js';
dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/comments', commentRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
