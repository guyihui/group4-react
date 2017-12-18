import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom';
//import {withRouter} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'


import ExpressApp from './ExpressApp'
import './index.css';
import Contact from './Contact';

var history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={ExpressApp}/>
    <Route path='/contact' component={Contact}/>
  </Router>
),
  //<ExpressApp />,
  document.getElementById('root')
)
//<Route path="/contact" component={Contact}/>
