import React from 'react';
import '../styles/New.css';
import Navbar from'./Navbar';
import Form from './Form';
import  Home from './Home';

class New extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero"></div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Home
                  avatarUrl="https://vinti7.com/wp-content/uploads/2016/04/logos-de-perros-92.jpg"
                  />
            </div>
            <div className="col-6">
            <Form onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default New;