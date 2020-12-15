import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className='sticky-top'>
      <Navbar bg='primary' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='navbar__brand'>Wedding 2021</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link>
                <i className='fas fa-book px-2'></i>
                Our Story
              </Nav.Link>
              <LinkContainer to='/rsvp'>
                <Nav.Link>
                  <i className='fas fa-edit px-2'></i>
                  RSVP
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/zoom'>
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
