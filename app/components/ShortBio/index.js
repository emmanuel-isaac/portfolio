/**
*
* ShortBio
*
*/

import React from 'react';

import styles from './styles.css';
import Header from '../../components/Header';

function ShortBio() {
  return (
    <div className={styles.shortBio}>
      <Header />

      <div className={'container'}>
        <div className={styles.bioText}>
          <p>&lt;SOFTWARE CRAFTSMAN /&gt;</p>
          <p>&lt;CRITICAL THINKER /&gt;</p>
          <p>&lt;PROBLEM SOLVER /&gt;</p>
          <p>&lt;LIFELONG LEARNER /&gt;</p>
        </div>
      </div>
    </div>
  );
}

export default ShortBio;
