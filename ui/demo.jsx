// Framework Level
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';

// Views
import CaptainsConsole from 'View/captainsConsole.jsx';
import ComponentIndex from 'View/componentIndex.jsx'; // ToDo: For development. Remove!
import Dashboard from 'View/dashboard.jsx';
import SplashScreen from 'View/splashScreen.jsx';

// Styles
import 'Style/global.scss';

render((
  <Router onUpdate={ () => window.scrollTo(0, 0) } history={ browserHistory }>
    <Route path='/' component={ SplashScreen } />
    <Route path="/CaptainsConsole" component={ CaptainsConsole } />
    <Route path='/Dashboard' component={ Dashboard } />
    <Route path='/ComponentIndex' component={ ComponentIndex } />
  </Router>
),
document.querySelector('#application'))
