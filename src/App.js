import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import './styles/Navbar.css';
import Map from './components/map'
import LeafMap from './components/LeafMap';
// import MapView from './components/MapView';
import NewPag from './viwes/NewPag'
import Form from './viwes/Form';
import { Container, Card, ButtonGroup, Button} from '@material-ui/core';


function App() {
    return (
        <Fragment>
            <Router>
                <Container xs="12" >
                    <Card>

                    <Route exact path="/" component={NewPag} />
                    <Route path="/map" component={LeafMap} />
                    <Route path="/Form" component={Form} />
                    <Route path="/mapa" component={Map}/>
                    
                 
                    <ButtonGroup color="warning" variant="contained"  className="navbar navbar-fixed-bottom">
                        <div className="container-fluid flex-xs-row">

                            <Button className="nav-item">
                                 <Link to="/" className="nav-link">Home</Link>
                            </Button>
                            <Button className="nav-item" >
                                <Link to="/Form" className="nav-link">Iniciar Sesión</Link>
                            </Button>
                          
                                             
                        </div>
                    </ButtonGroup >  
                    </Card>
                </Container>
            </Router>
            
        </Fragment>

);
    }

export default App;
