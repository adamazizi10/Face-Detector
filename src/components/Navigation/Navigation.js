import React from 'react';
import './Navigation.css';
import Brain from './brain.png';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return ( 
            <header className="header">
            <nav className='nav-bar-Navigation'>
                <div id="title">
                    <img src={Brain} id="header-img" />
                    <h1 className='colorForNavText'>Face Detector </h1>
                </div>
                <ul className="nav-link">
                    <li><p onClick={() => onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p></li>
                </ul>
            </nav>
        </header>
        )
    }
    else{
        return ( 
            <header className="header">
            <nav className='nav-bar-Navigation'>
                <div id="title">
                    <img src={Brain} id="header-img" />
                    <h1 className='colorForNavText'>Face Detector </h1>
                </div>
                <ul className="nav-link">
                    <li><p onClick={() => onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p></li>
                    <li><p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p></li>
                </ul>
            </nav>
        </header>
            );
    }
}

export default Navigation;

