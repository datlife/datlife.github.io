import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Article from './components/article';

import Blog from './containers/blog';
import Projects from './containers/project';
import About from './containers/about';
import Resume from './containers/resume';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Blog} />
          <Route path='/blog/:slug' component={Article} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
