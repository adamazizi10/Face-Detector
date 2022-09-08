import React from 'react';
import './Navigation.css';
import faceDetectPic from './faceDetectPic.png';

function Navigation ({ onRouteChange, isSignedIn, route}) {
    return (
        <header className="header">
            <nav className='nav-bar-Navigation'>
                <div id="title">
                    <img alt='' src={faceDetectPic} id="header-img" />
                    <h1 className='colorForNavText'>Face Detector </h1>
                </div>
                <ul className="nav-link">
                    {isSignedIn
                        ? <div style={{ display: 'flex' }}>
                            <li className='liNav'><p style={route === 'home' ? {backgroundColor:'13e47e', borderRadius: '15px'} : {}} onClick={() => onRouteChange('home')} className='f3 link black underline pa3 pointer'>Home</p></li>
                            <li className='liNav' ><p style={route === 'Profile' ? {backgroundColor:'#13e47e', borderRadius: '15px'} : {}} onClick={() => onRouteChange('Profile')} className='f3 link black underline pa3 pointer'>Profile</p></li>
                            <li className='liNav' ><p style={route === 'Signin' ? {backgroundColor:'#13e47e', borderRadius: '15px'} : {}} onClick={() => onRouteChange('Signin')} className='f3 link black underline pa3 pointer'>Sign Out</p></li>
                        </div>
                        : <div style={{ display: 'flex' }}>
                            <li className='liNav'><p style={route === 'Signin' ? {backgroundColor:'#13e47e', borderRadius: '15px'} : {}} onClick={() => onRouteChange('Signin')} className='f3 link black underline pa3 pointer'>Sign In</p></li>
                            <li className='liNav'><p style={route === 'register' ? {backgroundColor:'#13e47e', borderRadius: '15px'} : {}} onClick={() => onRouteChange('register')} className='f3 link black underline pa3 pointer'>Register</p></li>
                        </div>}
                </ul>
            </nav>
        </header>
    )
}
export default Navigation;

