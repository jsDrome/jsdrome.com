import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './view/pages/Home/Home';

const Routes = () => <Router>
  <Switch>
    <Route exact path="/post/:folder/:subfolder/:post" component={Home} />
    <Route path="/" component={Home} />
  </Switch>
</Router>

export default Routes;