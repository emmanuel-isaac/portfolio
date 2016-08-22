/**
*
* Header
*
*/

import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      <Navbar className={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand className={styles.brand}>
            <a href="/">Emmanuel Isaac</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/" className={styles.navitem}>Home</NavItem>
            <NavItem eventKey={2} href="#about" className={styles.navitem}>About</NavItem>
            <NavItem eventKey={3} href="#contact" className={styles.navitem}>Contact</NavItem>
            <NavItem eventKey={4} href="#repos" className={styles.navitem}>Repositories</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
