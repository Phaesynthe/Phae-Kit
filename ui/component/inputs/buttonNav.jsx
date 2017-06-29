import React, { Component } from 'react'

import ButtonBase from './base/buttonBase.jsx'

require('Style/component/button/buttonNav.scss');

class ButtonAction extends Component {
  getClasses() {
    return 'nav';
  }

  render() {
    return (
      <ButtonBase
        { ...this.props }
        className={ this.getClasses() }
      >
        { this.props.children }
      </ButtonBase>
    );
  }
}

export default ButtonAction;
