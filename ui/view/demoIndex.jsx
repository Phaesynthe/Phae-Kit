// This is a dev only view
import React, { Component } from 'react';
import { Link } from 'react-router';

// Components

class DemoIndex extends Component {
  render() {
    return (
      <div className='view-demo-index'>
        <h1>Demo Index</h1>
        <Link className='interior-link' to='/StoryPartials'>Story Partials</Link><br />
        <Link className='interior-link' to='/ComponentIndex'>Component Index</Link><br />
        <Link className='interior-link' to='/InputIndex'>Input Index</Link><br />
        <Link className='interior-link' to='/LayoutIndex'>Layout Index</Link><br />
      </div>
    );
  }
}

export default DemoIndex;
