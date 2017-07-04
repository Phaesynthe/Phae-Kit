import React, { Component } from 'react'

import 'Style/component/button/base.scss';

class ButtonsBase extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getClass = this.getClass.bind(this);
  }

  // Pull any passed in class out of the instance and return it
  getClass() {
    return [ 'base', (this.props.className || '') ].join(' ');
  }
  handleClick(ev) {
    if (typeof this.props.onClick === 'function') {
      // Fist, block the event from bubbling up
      ev.preventDefault();
      // Now call the passed in click handler
      this.props.onClick.call(ev);
    }
  }
  render() {

    return (
      <button
          className={ this.getClass() }
          onTouchTap={ this.handleClick }
          type={ this.props.type || 'submit' }
      >
        { this.props.children }
      </button>
    )
  }
}

export default ButtonsBase;