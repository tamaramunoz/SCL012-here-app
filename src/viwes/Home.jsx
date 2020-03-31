import React from 'react';
import '../styles/Home.css';
import Log  from './imagen/ISOTIPO.png';

 
class Badges extends React.Component{
    render() {
    return ( 
    <div className="Badge">
        <div className="Badge__section-info">
                <img 
                    className="Badge__avatar"
                    src={Log} 
                    alt="avatar" 
                />
                <div>
                   <h2 className="Badge__footer">
                   <span>¿Vamos a dar un paseo?</span>
                        </h2> 
                </div>
                </div>
                </div>
    
    ); 
 }   
}
export default Badges; 
