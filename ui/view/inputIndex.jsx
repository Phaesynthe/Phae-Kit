// This is a dev only view

import React, { Component } from 'react';

// Components
import TextBlock from 'Component/input/textBlock.jsx';

class InputIndex extends Component {
  render() {
    return (
      <div className='view-component-index'>
        <h1>Input Index</h1>

        <h4>Text Block</h4>
        <TextBlock />
      </div>
    );
  }
}

export default InputIndex;
