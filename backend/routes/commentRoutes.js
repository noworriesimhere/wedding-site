import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Comment from '../models/commentModel.js';

// @desc  Fetch all comments
// @route GET /api/comments
// @access  public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const comments = await Comment.find({});
    res.json(comments);
  })
);

// @desc  Fetch single comment
// @route GET /api/comments/:id
// @access  public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
    // const comment = comments.find((x) => x._id === Number(req.params.id));
    res.json(comment);
  })
);

export default router;
