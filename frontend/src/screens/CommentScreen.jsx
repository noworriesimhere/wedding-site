import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import comments from '../comments';

const CommentScreen = ({ match }) => {
  const comment = comments.find((c) => c._id === Number(match.params.id));
  return (
    <>
      <Row>
        <Col>
          <Image src={comment.image} fluid></Image>
        </Col>
        <Col>
          <h1>{comment.name}</h1>
          <h6>{comment.location}</h6>
          <p>{comment.text}</p>
          <LinkContainer to={`/rsvp/`}>
            <a href>Go Back</a>
          </LinkContainer>
        </Col>
      </Row>
    </>
  );
};

export default CommentScreen;