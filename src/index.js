import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.js';

import MyLayout from './MyLayout';
import NicePage from './NicePage';
import SignIn from './SignIn';
import Dashboard from './Dashboard/dashboard';
import GridPage from './GridPage';
import Inputs from './Inputs';

ReactDOM.render(
    <Router>
        <MyLayout>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/Nice" component={NicePage} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/Dash" component={Dashboard} />
                <Route path="/Grid" component={GridPage} />
                <Route path="/Input" component={Inputs} />
                <Redirect to="/" />
            </Switch>
        </MyLayout>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
