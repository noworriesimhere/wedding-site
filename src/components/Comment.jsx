import React from 'react';
import { Card } from 'react-bootstrap';

const Comment = ({ comment }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/RSVP/${comment._id}`}>
        <Card.Img src={comment.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/RSVP/${comment._id}`}>
          <Card.Title as='div'>
            <strong>{comment.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <div className='my-3'>{comment.displayLocation}</div>
        </Card.Text>
        <Card.Text as='h3'>${comment.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
