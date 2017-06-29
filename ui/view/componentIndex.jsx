// This is a dev only view

import React, { Component } from 'react';

// Components
import ButtonAction from 'Component/inputs/buttonAction.jsx';

import ButtonNav from 'Component/inputs/buttonNav.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div className='view-component-index'>
        <h1>Component Index</h1>
        <ButtonAction>normal Action Button</ButtonAction> <br />
        <ButtonAction primary>Primary Action Button</ButtonAction> <br />
        <ButtonAction secondary>Secondary Action Button</ButtonAction> <br />

        <br />

        <ButtonNav>Nav</ButtonNav> <br />
      </div>
    );
  }
}

export default Dashboard;
