import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.redirectToComponentIndex = this.redirectToComponentIndex.bind(this);
  }

  redirectToComponentIndex(uri) {
    browserHistory.push('/ComponentIndex');
  }

  render() {
    return (
      <div className='view-dashboard'>
        Dashboard
        <br />
        <button onClick={ this.redirectToComponentIndex }>
          Component Index
        </button>
      </div>
    );
  }
}

export default Dashboard;
