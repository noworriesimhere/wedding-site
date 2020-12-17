import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

const CommentScreen = ({ match }) => {
  const [comment, setComment] = useState({ user: {} });

  useEffect(() => {
    const fetchComment = async () => {
      const { data } = await axios.get(`/api/comments/${match.params.id}`);
      setComment(data);
    };
    fetchComment();
  }, [match]);

  return (
    <>
      <Row>
        <Col>
          <Image src={comment.image} fluid></Image>
        </Col>
        <Col>
          <h1>{comment.user.name}</h1>
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
