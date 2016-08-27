/**
 *
 * Contact
 *
 */

import React from 'react';


import styles from './styles.css';

function Contact() {
  return (
    <div className={`container ${styles.contact}`}>
      <p>Feel free to email me</p>
      <a href="mailto:isaac.e.ayodeji@gmail.com">isaac.e.ayodeji@gmail.com</a>

      <hr />

      <div className="row">
        <div className="col-xs-4">
          <button
            className="btn btn-secondary"
            type="button"
          >
            Twitter
          </button>
        </div>
        <div className="col-xs-4">
          <button
            className="btn btn-secondary"
            type="button"
          >
            Github
          </button>
        </div>
        <div className="col-xs-4">
          <button
            className="btn btn-secondary"
            type="button"
          >
            Google+
          </button>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Contact;
