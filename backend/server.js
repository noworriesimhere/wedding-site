import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import comments from './data/comments.js';
import commentRoutes from './routes/commentRoutes.js';
dotenv.config();
const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
