import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Comment from '../models/commentModel.js';
import User from '../models/userModel.js';

// @desc  Fetch all comments
// @route GET /api/comments
// @access  public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const comments = await Comment.find({}).populate('user');
    res.json(comments);
  })
);

// @desc  Fetch single comment
// @route GET /api/comments/:id
// @access  public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id).populate('user');

    if (comment) {
      res.json(comment);
    } else {
      res.status(404);
      throw new Error('Comment not found');
    }
  })
);

export default router;
