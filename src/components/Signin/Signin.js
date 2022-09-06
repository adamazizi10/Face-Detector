import React, { useState } from 'react';
import './Signin.css';
import { FaEnvelope, FaLock, FaChevronRight } from 'react-icons/fa';

function Signin({ onRouteChange, loadUser }) {

    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');

    const onEmailChange = (event) => setEmail(event.target.value)

    const onPasswordChange = (event) => setPassword(event.target.value)


    const onSubmitSignIn = (event) => {
        event.preventDefault();
        // fetch('https://lit-taiga-06669.herokuapp.com/signin', {
        fetch('http://localhost:3003/signin', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                email: Email.toLowerCase(),
                password: Password
            })

        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user)
                    onRouteChange('home')
                }
                else{
                    setEmailError('Email Error')
                    setPasswordError('Password Error')
                }
            })
    }

    return (
        <div>
            <div className="containerSignin">
                <div className="screen">
                    <div className="screen__content">
                        <div className="login">
                            <div className="login__field">
                                <i className="login__icon"><FaEnvelope /></i>
                                <input onChange={onEmailChange} type="text" className="login__input" placeholder="Enter your Email" />
                                <p>{EmailError}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input onChange={onPasswordChange} type="password" className="login__input" placeholder="Enter your Password" />
                                <p>{PasswordError}</p>
                            </div>
                            <button onClick={onSubmitSignIn} className="button login__submit">
                                <span>Log In Now</span>
                                <i className='button__icon'><FaChevronRight /></i>
                            </button>
                        </div>
                        <div className="NewMemberText">
                            <h3>New Member?</h3>
                            <div className="RegisterClick">
                                <p onClick={() => onRouteChange('register')}>Register</p>
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Signin;