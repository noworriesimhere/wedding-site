import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './header.styles.scss';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='navbar__brand'>Wedding 2021</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/rsvp'>
                <Nav.Link>
                  <i className='fas fa-check px-2'></i>
                  RSVP / Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/our-story'>
                <Nav.Link>
                  <i className='fas fa-book px-2'></i>
                  Our Story
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/guestbook'>
                <Nav.Link>
                  <i className='fas fa-edit px-2'></i>
                  Guest Book
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/watch-live'>
                <Nav.Link>
                  <i className='fas fa-video px-2'></i>Watch Live
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
