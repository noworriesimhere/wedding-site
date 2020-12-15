import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import comments from '../comments';

const CommentScreen = ({ match }) => {
  const comment = comments.find((c) => c._id === match.params.id);
  return (
    <>
      <Row>
        <Col>
          <Image src={comment.image} fluid></Image>
        </Col>
        <Col>
          <h1>{comment.name}</h1>
          <h2>{comment.location}</h2>
          <p>{comment.text}</p>
        </Col>
      </Row>
    </>
  );
};

export default CommentScreen;
