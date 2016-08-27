/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import ShortBio from '../../components/ShortBio';
import About from '../../components/About';
import Contact from '../../components/Contact';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ShortBio />
        <About />
        <Contact />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(HomePage);
