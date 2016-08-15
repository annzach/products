import React from 'react';
import {render} from 'react-dom'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import Title from './components/Title'
import Registration from './components/Registration'
import Display from './components/Display'
import './css/style.css'


render(
  <Router history = {browserHistory}>
    <Route path = '/' component ={Title}>
    <Route path = 'registration' component ={Registration}/>
    <Route path = 'display' component ={Display}/>
     
    
    </Route>
  </Router>,
 document.getElementById('root')
);
