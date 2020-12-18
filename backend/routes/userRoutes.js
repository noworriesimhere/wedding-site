import express from 'express';
import User from '../models/userModel.js';
import { authUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/login', authUser);

router.post('/register', async (req, res) => {
  const { email, name, password } = req.body;
  const user = new User({ email, name });
  const registeredUser = User.register(user, password);
  console.log(registeredUser);
  res.send('user registered!');
});

export default router;
