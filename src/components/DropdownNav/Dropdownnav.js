import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

function DropdownNav({onRouteChange, route, isSignedIn}) {
  return (
    <Dropdown>
        {isSignedIn
      ?<Dropdown.Toggle style={{background: '#21da7e', border: 'none', color: 'black', borderRadius: '25px'}} size='lg' id="dropdown-basic">
        Account
      </Dropdown.Toggle>
      :<Dropdown.Toggle style={{background: '#21da7e', border: 'none', color: 'black', borderRadius: '25px'}} size='lg' id="dropdown-basic">
       Sign In / Register
    </Dropdown.Toggle>
        }
      {isSignedIn
      ?<div>

        <Dropdown.Menu>
         <Dropdown.Item onClick={() => onRouteChange('home')}>Home</Dropdown.Item>
         <Dropdown.Item onClick={() => onRouteChange('Profile')}>Profile</Dropdown.Item>
         <Dropdown.Item onClick={() => onRouteChange('Password')}>Change Password</Dropdown.Item>
         <Dropdown.Item onClick={() => onRouteChange('Signin')}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      :<Dropdown.Menu>
        <Dropdown.Item onClick={() => onRouteChange('Signin')}>Sign In</Dropdown.Item>
        <Dropdown.Item onClick={() => onRouteChange('register')}>Register</Dropdown.Item>
      </Dropdown.Menu>
    } 
    </Dropdown>
  );
}

export default DropdownNav;