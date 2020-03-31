import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/Navbar.css';
import LeafMap from './components/LeafMap';
// import MapView from './components/MapView';
import NewPag from './viwes/NewPag'
import Form from './viwes/Form';

function App() {
    return (
        <Fragment>
            <Router>
                <div>
                    <Route exact path="/" component={NewPag} />
                    <Route path="/map" component={LeafMap} />
                    <Route path="/Form" component={Form} />

                    <footer className="footer">
                    <div className="navbar navbar-fixed-bottom">
                        <div className="container-fluid flex-column flex-lg-row">

                            <ul className="Lin-Home">

                                <li className="nav-item">
                                    <Link to="/Form" className="nav-link">Iniciar Sesión</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="/map" className="nav-link">Mapa</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    </footer>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
