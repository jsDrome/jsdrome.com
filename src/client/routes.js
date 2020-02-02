import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './view/pages/Home/Home';
import Restricted from './view/pages/Restricted/Restricted';
import Payment from './view/pages/Payment/Payment';

const Routes = () => <Router>
  <Switch>
    <Route exact path="/post/:folder/:subfolder/:post" component={Home} />
    <Route exact path="/restricted" component={Restricted} />
    <Route exact path="/payment" component={Payment} />
    <Route path="/" component={Home} />
  </Switch>
</Router>

export default Routes;