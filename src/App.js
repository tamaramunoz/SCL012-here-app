import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/Navbar.css';
import './App.css'
import LeafMap from './components/LeafMap';
import NewPag from './viwes/NewPag'
import Form from './viwes/Form';
import LogIn from './firebase/LoginFire';

function App() {
     
      
    return (
        <Fragment>
            <header className='header' ></header>
            <Router>
                <div>
                    <Route exact path="/" component={NewPag} />
                    <Route path="/map" component={LeafMap} />
                    <Route path="/Login" component={LogIn} />
                    <Route path="/Form" component={Form} />
                 
                    <footer className="footer">
                    <div className="navbar navbar-fixed-bottom">
                        <div className="container-fluid  flex-lg-row">

                            <ul className="Lin-Home">

                                <li className="nav-item">
                                    <Link to="/LogIn" className="nav-link">Registrame</Link>
                                </li>

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
