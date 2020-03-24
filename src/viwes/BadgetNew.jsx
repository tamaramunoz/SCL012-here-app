import React from 'react';
import '../styles/BadgeNew.css';
import Navbar from'../viwes/Navbar';
import BadgeForm from '../viwes/BadgetForm';
import  Badges from '../viwes/Badget';

class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero"></div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badges
                  avatarUrl="https://vinti7.com/wp-content/uploads/2016/04/logos-de-perros-92.jpg"
                  />
            </div>
            <div className="col-6">
            <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;