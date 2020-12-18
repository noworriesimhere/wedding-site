import asyncHandler from 'express-async-handler';
import Comment from '../models/commentModel.js';

// @desc  Fetch all comments
// @route GET /api/comments
// @access  public
const fetchComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({}).populate('user');
  res.json(comments);
});

// @desc  Fetch single comment
// @route GET /api/comments/:id
// @access  public
const fetchComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id).populate('user');

  if (comment) {
    res.json(comment);
  } else {
    res.status(404);
    throw new Error('Comment not found');
  }
});

export { fetchComment, fetchComments };
