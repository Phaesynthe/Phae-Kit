import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SlashScreen extends Component {
  constructor(props) {
    super(props);

    // Set the timed redirect.
    // Allow enough time for any animations to play
    const transitionTimer = window.setTimeout(() => {
      browserHistory.push('/Dashboard');
      },
      1000
    ); // ToDo: pull the timeout from some settings object.
  }

  render() {
    return (
      <div className='view-splash'>
        splash screen
      </div>
    );
  }
}

export default SlashScreen;
