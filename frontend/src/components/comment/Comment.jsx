import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Comment = ({ comment }) => {
  return (
    <Card className='my-2 p-1 rounded'>
      <Link to={`/comments/${comment._id}`}>
        <Card.Img src={comment.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/comments/${comment._id}`}>
          <Card.Title as='div' className='text-center'>
            <strong>{comment.user.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className='text-center'>
          <div className='my-3'>{comment.location}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
