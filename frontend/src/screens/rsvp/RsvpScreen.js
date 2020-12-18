import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const RsvpScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const registerUser = async (name, email, password) => {
    try {
      axios.post(
        '/api/users/register',
        { name, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Register success!');
      const location = {
        pathname: '/guestbook',
        state: { message },
      };
      history.push(location);
    } catch (error) {
      setMessage(error);
    }
  };

  useEffect(() => {
    console.log('useEffect ran!');
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      console.log('passwords didnt match');
    } else {
      registerUser(name, email, password);
    }
  };

  return (
    <Container>
      <Row className='py-3'>
        <Col md={6}>
          <h1>R.S.V.P</h1>
          {message && <Alert variant='danger'>{message}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={6}></Col>
      </Row>
    </Container>
  );
};

export default RsvpScreen;
