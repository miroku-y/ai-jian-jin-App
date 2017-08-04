import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from  'react-router';


import Root from './components/root';
import Banner from './components/banner';
import Home from './components/home/';

function checkIsOauth(nextState, replace) {
    let token = window.localStorage.getItem("token");
    if (!token) {
        replace({ pathname: '/banner' })
    }
}
const route = (
    <Router history={hashHistory}>
        {/*<Route path='/banner' component={Banner}/>*/}
        <Route path="/" component={Root}>
            <IndexRoute component={Banner}/>
            <Route path="/Home" component={Home}/>
        </Route>
    </Router>
);

export default route;
