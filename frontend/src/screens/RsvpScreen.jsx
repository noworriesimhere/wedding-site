import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Comment from '../components/Comment';

const RsvpScreen = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get('/api/comments');
      setComments(data);
    };
    fetchComments();
  }, []);

  return (
    <Container className='pt-5 rsvp__container'>
      <Row>
        <Col sm={12} md={4} className='pt-5'>
          <Form className='sticky-top'>
            <h2>Leave us a message!</h2>
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Who are you?' />
            </Form.Group>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder="We'd love to reach out to you!"
              />
              <Form.Text className='text-muted'>
                We won't share your email with anyone
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formLocation'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type='string'
                placeholder='Where are you located?'
              />
            </Form.Group>
            <Form.Group controlId='formImage'>
              <Form.Label>Upload a Selfie!</Form.Label>
              <Form.Control type='file' label='Check me out' />
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

export default RsvpScreen;
