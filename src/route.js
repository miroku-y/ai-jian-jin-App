import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from  'react-router';


import Root from './components/root';
import Banner from './components/banner';
import Home from './components/home/';
import Project from './components/project';
import Ones from './components/ones';
import Assets from './components/assets';
import Interaction from './components/interaction';

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
            {/* <Route path="/Home" component={Home}/> */}
            <Route path="ones" component={Ones}/>
            <Route path='project' component={Project} />
            <Route path='assets' component={Assets} />
            <Route path='interaction' component={Interaction} />
            
        </Route>
    </Router>
);

export default route;
