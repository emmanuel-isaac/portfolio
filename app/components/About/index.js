/**
*
* About
*
*/

import React from 'react';


import styles from './styles.css';

function About() {
  return (
    <div className={`container ${styles.about}`}>
      <h3 className={'h3'}>ABOUT</h3>
      <p className={'lead'}>
        I am a software craftsman with the desire to always deliver top-notch, high performance,
        high coverage, and scalable applications.
      </p>

      <p>
        I currently work with 2U, an online educational company, through Andela, whose goal
        is to train technology leaders in Africa.
      </p>

      <p>
        I have hands-on experience building applications with several technologies including
        but not limited to Python, Django, Flask, MongoDB, PostgreSQL, Git, JavaScript and ReactJS.

        Critical thinking, which is perhaps my best quality, has always come in handy, whenever I
        proffer solutions to software problems.
      </p>
    </div>
  );
}

export default About;
