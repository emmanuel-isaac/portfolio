/**
 *
 * Header
 *
 */

import React from 'react';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      <nav className={`navbar navbar-light ${styles.navbar}`}>
        <div className="container">
          <h2 className={`h2`}>Emmanuel Isaac</h2>
        </div>
      </nav>
    </div>
  );
}

export default Header;
