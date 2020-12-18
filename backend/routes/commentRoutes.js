import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Comment from '../models/commentModel.js';
import {
  fetchComment,
  fetchComments,
} from '../controllers/commentController.js';

router.get('/', fetchComments);
router.get('/:id', fetchComment);

export default router;
