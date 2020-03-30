import React from 'react';
import '../styles/New.css';
import Home from './Home';

class New extends React.Component {
  render() {
    return (
      <div>
        <div className="BadgeNew__hero"></div>
        <div className="container">
          <div>
            <div>
              <Home
                avatarUrl="https://vinti7.com/wp-content/uploads/2016/04/logos-de-perros-92.jpg"
              />
            </div>
            <div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
