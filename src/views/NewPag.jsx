import React from 'react';
import Home from './Home';

class New extends React.Component {
  render() {
    return (
      <div>
        <header className='header' ></header>
        <div className="BadgeNew__hero"></div>
        <div className="container">
              <Home/>
        </div>
      </div>
    );
  }
}

export default New;
