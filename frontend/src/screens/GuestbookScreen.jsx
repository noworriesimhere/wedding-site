import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Comment from '../components/Comment';

const GuestbookScreen = () => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get('/api/comments');
      setComments(data);
    };
    fetchComments();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit!');
  };

  return (
    <Container className='pt-5 rsvp__container'>
      <Row>
        <Col sm={12} md={4} className='pt-5'>
          <Form className='sticky-top' onSubmit={submitHandler}>
            <h2>Leave us a message!</h2>

            <Form.Group controlId='location'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type='string'
                placeholder='Where are you located?'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='image'>
              <Form.Label>Link a picture</Form.Label>
              <Form.Control
                type='string'
                placeholder='picture link'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='text'>
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='We wish we could be with you in person'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={12} md={8} className='rsvp__overflow'>
          <Row>
            {comments.map((comment) => (
              <Col key={comment._id} xs={6} sm={4} md={6} lg={4} xl={3}>
                <Comment comment={comment} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestbookScreen;
