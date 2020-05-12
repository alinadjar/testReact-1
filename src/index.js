import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
//import 'jquery/dist/jquery';
//import 'popper.js/dist/popper.js';

import { Provider } from 'react-redux';
import dataStore from './iRedux/store';

import 'bootstrap/dist/js/bootstrap.js';


//import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
//import 'bootstrap-material-design/dist/js/bootstrap-material-design.js';

import MyLayout from './MyLayout';
import NicePage from './NicePage';
import SignIn from './SignIn';
import Dashboard from './Dashboard/dashboard';
import GridPage from './GridPage';
import Inputs from './Inputs';

import NicePageBootStrapy from './NicePageBootStrapy';
import adminPage from './adminPage';
import ProtectedRoute from './Helper/protected';
import Login from './login';
import Home from './home';
import about from './about';
import myMap from './myMap';
import rgm1 from './reactGoogleMaps/rgm1';
import FlickSlider from './flickSlider';




ReactDOM.render(
    <Provider store={dataStore} >
        <Router>
            <MyLayout>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    <Route path="/Nice" component={NicePage} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/login" component={Login} />
                    <Route path="/Dash" component={Dashboard} />
                    <Route path="/Grid" component={GridPage} />
                    <Route path="/Input" component={Inputs} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={about} />
                    <Route path="/map" component={myMap} />
                    <Route path="/flick" component={FlickSlider} />
                    {/* <Route path="/mapp" component={rgm1} /> */}

                    <ProtectedRoute path='/admin' component={adminPage} />


                    {/* <Route path="/admin" component={adminPage} /> */}

                    <Route path="/NiceBSTrap" component={NicePageBootStrapy} />
                    <Redirect to="/" component={App} />
                </Switch>
            </MyLayout>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
