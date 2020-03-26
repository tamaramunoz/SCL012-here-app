import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';


import './styles/Navbar.css';
import logo from './viwes/imagen/logo.jpeg';
import NewPag from './viwes/NewPag'


import Maps from './pages/maps';
import Results from './pages/results';

const App = ({ store })  => (

<Provider store={store}>

        <Fragment>
            <Router>
                <div className="Navbar">
                    <div className="container-fluid">

                        <a className="Navbar__brand" href="https://mail.google.com/">
                            <img className="Navbar__brand-logo" src={logo} alt="logo" />
                            <span className="font-weight-light">Peludos</span>
                            <span className="font-weight-bold">Lugares</span>
                            <div className="Links-Red"></div>
                        </a>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                     
                        <li className="nav-item">
                            <Link to="/maps" className="nav-link">Mapas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/results" className="nav-link">Resultados</Link>
                        </li>

                    </div>
                </div>

                <Route exact path="/" component={NewPag} />
               
                <Route path="/maps" component={Maps} />
				<Route path = "/results" component={Results}/>

            </Router>
        </Fragment>
</Provider>
);


App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;