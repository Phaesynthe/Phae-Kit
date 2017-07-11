// Framework Level
import React from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { useRouterHistory, Router, Route } from 'react-router';

const browserHistory = useRouterHistory(createHistory)({
  basename: '/app'
});

// Views
import ComponentIndex from 'View/componentIndex.jsx';
import InputIndex from 'View/inputIndex.jsx';
import DemoIndex from 'View/demoIndex.jsx';
import LayoutIndex from 'View/layoutIndex.jsx';
import StoryPartials from 'View/storyPartials.jsx';

// Styles
import 'Style/global.scss';

// import { useRouterHistory } from 'react-router';

render((
  <Router onUpdate={ () => window.scrollTo(0, 0) } history={ browserHistory }>
    <Route path='/' component={ DemoIndex } />
    <Route path='/ComponentIndex' component={ ComponentIndex } />
    <Route path='/InputIndex' component={ InputIndex } />
    <Route path='/LayoutIndex' component={ LayoutIndex } />
    <Route path='/StoryPartials' component={ StoryPartials } />
  </Router>
),
document.querySelector('#application'));
