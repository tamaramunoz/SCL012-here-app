import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/Navbar.css';
import './App.css'

import Login from './components/Login'
import LeafMap from './components/LeafMap';
import NewPag from './views/NewPag'
import Footer from './components/Footer';

function App() {

    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={NewPag} />
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        Sign Up
                    </Route>
                    <Route path="/map" component={LeafMap} />

                </Switch>

                <Footer />
            </Router>
        </Fragment>
    );
}

export default App;
