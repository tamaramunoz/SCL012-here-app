import React from 'react';
import '../styles/Home.css';
import confLogo from './imagen/LOGO.png';
import Log  from './imagen/LOGO.png'
 
class Badges extends React.Component{
    render() {
    return ( 
    <div className="Badge">
    <div className="Badge__header">
    <img className="PostAv" src={confLogo} alt="Logo de la imagen"/>
        </div>         
        <div className="Badges__section-name">
                <img 
                className="Badge__avatar"
                src={Log} 
                alt ="avatar" 
                />
                <div className="Badge__section-info">
            <h1>Pet Places
                </h1></div>
  
                <div>
                   <h2 className="Badge__footer">
                   <span >¿Vamos a dar un paseo?</span>
                        </h2> 
                </div>
                </div>
                </div>
    
    ); 
 }   
}
export default Badges; 
