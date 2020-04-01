import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/Navbar.css';
import './App.css'
import { ButtonGroup, Button} from '@material-ui/core'
import LeafMap from './components/LeafMap';
import NewPag from './viwes/NewPag'
import Form from './viwes/Form';


function App() {
    return (
        <Fragment>
            <header className='header' ></header>
            <Router>
                <div>
                    <Route exact path="/" component={NewPag} />
                    <Route path="/map" component={LeafMap} />
                    <Route path="/Form" component={Form} />
                     
                    <ButtonGroup  variant="contained"  className="fixed-bottom">
                        <div className="container-fluid flex-xs-row">


                            <Button color="warning">
                                <Link to="/Form" className="nav-link">Iniciar Sesión</Link>
                            </Button>
                            <Button color="warning" >
                                 <Link to="/" className="nav-link">Home</Link>
                            </Button >
                          
                                             
                        </div>
                    </ButtonGroup >  
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
