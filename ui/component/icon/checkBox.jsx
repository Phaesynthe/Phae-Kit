import React, { Component } from 'react';

import IconBase from './base/baseIcon.jsx';

class CheckBox extends Component {
  render() {
    return (
      <IconBase { ...this.props }>
        <svg version='1.1' viewBox='0 0 459 459' x='0px' y='0px'>
          <g id='check-box-outline'>
            <path d='M124.95,181.05l-35.7,35.7L204,331.5l255-255l-35.7-35.7L204,260.1L124.95,181.05z M408,408H51V51h255V0H51
              C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V204h-51V408z'/>
          </g>
        </svg>
      </IconBase>
    );
  }
}

export default CheckBox;
