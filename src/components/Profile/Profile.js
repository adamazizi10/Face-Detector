import React, { useState } from 'react';

import '../Signin/Signin.css'
import { FaEnvelope, FaUser, FaRegPlusSquare, FaCalendarAlt } from 'react-icons/fa';
import CustomFunctions from '../../CustomFunctions/CustomFunctions';

const {isNameValid, isEmailValid, isEmailEmpty } = CustomFunctions;
function Profile({ loadUser, onRouteChange, entries, name, email, joined, id }) {

    const [Name, setName] = useState(name);
    const [NameError, setNameError] = useState('');
    const [Email, setEmail] = useState(email);
    const [EmailError, setEmailError] = useState('');

    const onRegisterNameChange = (event) => setName(event.target.value)

    const onRegisterEmailChange = (event) => setEmail(event.target.value)

    const onUpdateClick = (event) => {
        if (isNameValid(Name) && isEmailValid(Email)) {
            setNameError('')
            setEmailError('')
            event.preventDefault()
            //  fetch(`https://lit-taiga-06669.herokuapp.com/profile/${id}`, {
            fetch(`http://localhost:3003/profile/${id}`, {
                method: 'put',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    name: Name,
                    email: Email,
                })
            })
                .then(response => response.json())
                .then(user => {
                    if (user.email) {
                        loadUser(user);
                        onRouteChange('home');
                    }
                    else {
                        setEmailError('This email already exists. Please enter a different email')
                    }

                })
        }
        else {
            !isNameValid(Name) ? setNameError('Please enter your name') : setNameError('')

            !isEmailEmpty(Email)
                ? !isEmailValid(Email) ? setEmailError('Please enter a valid email') : setEmailError('')
                : setEmailError('Please enter your Email')
        }


    }

    return (
        <div>
            <div className="containerProfile" >
                <div className="screenS" >
                    <div className="screen__contentS" >
                        <div  style={{paddingTop: '30px'}} className="loginP">
                            <div className="login__fieldProfile" >
                                <i className="login__iconProfile"><FaUser /></i>
                                <input type="text" className="login__inputProfile" defaultValue={Name} onChange={onRegisterNameChange} />
                                <p style={{padding: '0', margin: '0', color: 'red' }}>{NameError}</p>
                            </div>
                            <div className="login__fieldProfile">
                                <i className="login__iconProfile"><FaEnvelope /></i>
                                <input type="email" className="login__inputProfile" value={Email} onChange={onRegisterEmailChange} />
                                <p style={{padding: '0', margin: '0', color: 'red' }}>{EmailError}</p>
                            </div>
                            <div className="login__fieldProfile">
                                <i className="login__iconProfile"><FaRegPlusSquare /></i>
                                <input type="email" className="login__inputProfile"  readOnly defaultValue={`Images Detected: ${entries}`} />
                            </div>
                            <div className="login__fieldProfile">
                                <i className="login__iconProfile" ><FaCalendarAlt /></i>
                                <input type="email" className="login__inputProfile" readOnly defaultValue={`Joined: ${joined.substring(0, joined.length - 14)}`} />
                            </div>

                            <button style={{ marginTop: '10px' }}  onClick={onUpdateClick} className="button login__submit">
                                <span style={{ paddingTop: '0', marginTop: '0' }} className="button__textProfile">Update</span>
                            </button>
                            <button onClick={() => onRouteChange('home')} style={{display: 'inline'}} className="button login__submit">
                             <span>Cancel</span>
                          </button>
                        </div>
                    </div>
                    <div className="screen__backgroundS">
                        <span className="screen__background__shape screen__background__shape4S"></span>
                        <span className="screen__background__shape screen__background__shape3S"></span>
                        <span className="screen__background__shape screen__background__shape2S"></span>
                        <span className="screen__background__shape screen__background__shape1S"></span>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Profile;
