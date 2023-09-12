import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => ( 
  <div className={styles.NavBar} data-testid="NavBar">
          <Navbar bg="primary" data-bs-theme="dark">
         <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
