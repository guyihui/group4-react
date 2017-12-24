import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import { Router, Route, Switch } from 'react-router-dom';
//import {withRouter} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'


import ExpressApp from './ExpressApp'
import './index.css';
import Contact from './Contact';
import LoginInput from './src/LoginInput'

var history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LoginInput}/>
      <Route exact path="/main" component={ExpressApp}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </Router>
),
  //<ExpressApp />,
  document.getElementById('root')
)
//<Route path="/contact" component={Contact}/>
=======
import ExpressApp from './ExpressApp'
import './index.css'

ReactDOM.render(
  <ExpressApp />,
  document.getElementById('root')
)
>>>>>>> master
