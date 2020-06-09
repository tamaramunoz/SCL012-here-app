import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/Navbar.css';
import './App.css'
import { auth } from './backend/firebase'

import Login from './components/Login'
import LeafMap from './components/LeafMap';
import NewPag from './views/NewPag'
import Footer from './components/Footer';
import Loading from './components/Loading';
import SavedPlaces from './components/SavedPlaces';
import Restaurants from './components/Restaurants';
import Cafe from './components/Cafe';
import Bar from './components/Bar';


function App() {

    const [firebaseUser, setFirebaseUser] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user);
            if (user) {
                setFirebaseUser(user)
            } else {
                setFirebaseUser(null)
            }
        })
    }, [])

    return firebaseUser !== false ? (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={NewPag} />
                    <Route path="/login">
                        <Login />"
                    </Route>

                    <Route path="/map" component={LeafMap} />
                    <Route path="/saved" component={SavedPlaces} />
                    <Route path="/restaurants" component={Restaurants} />
                    <Route path="/cafes" component={Cafe} />
                    <Route path="/bar" component={Bar} />
                </Switch>
                
                <Footer firebaseUser={firebaseUser} />
            </Router>
        </Fragment>
    ) : (
            <Loading />
        )
}

export default App;
