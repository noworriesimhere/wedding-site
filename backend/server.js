import express from 'express';
import comments from './data/comments.js';
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.get('/api/comments/:id', (req, res) => {
  const comment = comments.find((x) => x._id === Number(req.params.id));
  res.json(comment);
});

app.listen(5000, console.log('Server running on port 5000'));
