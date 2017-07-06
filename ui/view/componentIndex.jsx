// This is a dev only view

import React, { Component } from 'react';

// Components
import ButtonAction from 'Component/control/buttonAction.jsx';
import ButtonNav from 'Component/control/buttonNav.jsx';

import Toggle from 'Component/input/toggle.jsx';

import IconConfigure from 'Component/icon/configure.jsx';

class ComponentIndex extends Component {
  render() {
    return (
      <div className='view-component-index'>
        <h1>Component Index</h1>

        <h2>Controls</h2>
        <ButtonAction>normal Action Button</ButtonAction> <br />
        <ButtonAction primary>Primary Action Button</ButtonAction> <br />
        <ButtonAction secondary>Secondary Action Button</ButtonAction> <br />

        <br />

        <ButtonNav>Nav</ButtonNav> <br />

        <h2>Inputs</h2>
        <Toggle />

        <h2>Icons</h2>
        <IconConfigure />
        <IconConfigure small />
        <IconConfigure large />
        <IconConfigure xsmall />
        <IconConfigure outlined />
      </div>
    );
  }
}

export default ComponentIndex;
