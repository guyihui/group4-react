import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom';
//import {withRouter} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'


import ExpressApp from './ExpressApp'
import './index.css';
import Contact from './Contact';

var history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ExpressApp}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </Router>
),
  //<ExpressApp />,
  document.getElementById('root')
)
//<Route path="/contact" component={Contact}/>
