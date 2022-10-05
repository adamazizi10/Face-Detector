import React from 'react';
import './Navigation.css';
import faceDetectPic from './faceDetectPic.png';
import DropdownNav from '../DropdownNav/Dropdownnav';
function Navigation ({ onRouteChange, isSignedIn, route}) {
    
    return (
        <header className="header">
            <nav className='nav-bar-Navigation'>
                <div id="title">
                    {isSignedIn
                    ?<div style={{display: 'flex'}}>
                        <img alt=''  onClick={() => onRouteChange('home')}  className='pointer' src={faceDetectPic} id="header-img" />
                        <h1 onClick={() => onRouteChange('home')} className='colorForNavText displayNoneTitle pointer'>Face Detector </h1>
                     </div>

                    :<div style={{display: 'flex'}}>
                        <img alt='' onClick={() => onRouteChange('Signin')}  className='pointer' src={faceDetectPic} id="header-img" />
                        <h1 onClick={() => onRouteChange('Signin')} className='colorForNavText displayNoneTitle pointer'>Face Detector </h1>
                     </div>
                    }
                </div>
                <DropdownNav route={route} isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
            </nav>
        </header>
    )
}
export default Navigation;

