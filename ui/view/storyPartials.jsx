// This is a dev only view

import React, { Component } from 'react';

// Components
import StoryNode from 'Partial/storyNode/storyNode.jsx';

class StoryPartials extends Component {
  render() {
    return (
      <div className='view-story-partials'>
        <h1>Story Partials</h1>
        <h2>storyNode</h2>
        <StoryNode></StoryNode>
      </div>
    );
  }
}

export default StoryPartials;
