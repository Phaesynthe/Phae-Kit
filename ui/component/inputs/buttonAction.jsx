import React, { Component } from 'react'

import ButtonBase from './base/buttonBase.jsx'

require('Style/component/button/buttonAction.scss');

class ButtonAction extends Component {
  getClasses() {
    // Functionally white-list each button type and restrict to only allow
    // the action button to be of one type.
    let cssClasses = [ 'action' ];
    if (this.props.primary) {
      cssClasses.push( 'primary');
    } else if (this.props.secondary) {
      cssClasses.push( 'secondary');
    }
    return cssClasses.join(' ')
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
