import React, { Component } from 'react';

import IconBase from './base/baseIcon.jsx';

class Columns extends Component {
  render() {
    return (
      <IconBase { ...this.props }>
        <svg version='1.1' x='0px' y='0px' viewBox='0 0 469.333 469.333'>
          <g>
            <path d='M458.667,0h-448C4.771,0,0,4.771,0,10.667v448c0,5.896,4.771,10.667,10.667,10.667h448
              c5.896,0,10.667-4.771,10.667-10.667v-448C469.333,4.771,464.563,0,458.667,0z M224,448H21.333V21.333H224V448z M448,448H245.333
              V21.333H448V448z'/>
          </g>
        </svg>
      </IconBase>
    );
  }
}

export default Columns;
