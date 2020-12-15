import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Comment = ({ comment }) => {
  return (
    <Card className='my-3 mx-1 p-3 rounded'>
      <Link to={`/comments/${comment._id}`}>
        <Card.Img src={comment.image} variant='top' />
      </Link>

      <Card.Body>
        <Link href={`/comments/${comment._id}`}>
          <Card.Title as='div'>
            <strong>{comment.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className='my-3'>{comment.location}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
