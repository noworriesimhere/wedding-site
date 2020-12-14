import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/' className='navbar__brand'>
            Georgia & Alan 2021
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/aboutus'>
                <i className='fas fa-book'></i>
                Our Story
              </Nav.Link>
              <Nav.Link href='/rsvp'>
                <i className='fas fa-edit'></i>
                RSVP
              </Nav.Link>
              <Nav.Link href='/zoom'>
                <i className='fas fa-video'></i>Watch Live
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
