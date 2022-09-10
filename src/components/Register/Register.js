
import React, { useState } from 'react';
import './Register.css';
import { FaEnvelope, FaLock, FaUser, FaExclamationCircle } from 'react-icons/fa';
import CustomFunctions from '../../CustomFunctions/CustomFunctions';

const { isPasswordValid, isNameValid, isEmailValid, isPasswordEmpty, isEmailEmpty, displayPasswordSpecifications} = CustomFunctions;
function Register({ loadUser, onRouteChange }) {

    const [Name, setName] = useState('');
    const [NameError, setNameError] = useState('');
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [PasswordErrorInfo, setPasswordErrorInfo] = useState('');
    const [PasswordErrorClickOpen, setPasswordErrorClickOpen] = useState(<FaExclamationCircle />);
    const [PasswordErrorClickClose, setPasswordErrorClickClose] = useState('');
    const [PasswordConfirmError, setPasswordConfirmError] = useState('');
    const [DifferentPasswordsError, setDifferentPasswordError] = useState('');
    const [PasswordConfirm, setPasswordConfirm] = useState('');

    const setAllPasswordErrors = (PassError, ToggleCloseError, ToggleOpenError) => {
        setPasswordErrorInfo(PassError)
        setPasswordErrorClickClose(ToggleCloseError)
        setPasswordErrorClickOpen(ToggleOpenError)
    }
    const onRegisterNameChange = (event) => setName(event.target.value)

    const onRegisterEmailChange = (event) => setEmail(event.target.value)

    const onRegisterPasswordChange = (event) => setPassword(event.target.value);

    const onPasswordConfirmChange = (event) => setPasswordConfirm(event.target.value)

    const onShowPasswordErrorClick = () => setAllPasswordErrors(displayPasswordSpecifications, <FaExclamationCircle />, '')

    const onClosePasswordErrorClick = () => setAllPasswordErrors('', '' ,<FaExclamationCircle />)

    const onRegisterClick = (event) => {
        if (Password === PasswordConfirm && isPasswordValid(Password) && isPasswordValid(PasswordConfirm) && isNameValid(Name) && isEmailValid(Email)) {
            setNameError('')
            setEmailError('')
            setPasswordError('')
            setPasswordConfirmError('')
            setDifferentPasswordError('')
            event.preventDefault()
            // fetch('https://lit-taiga-06669.herokuapp.com/register', {
            fetch('http://localhost:3003/register', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    name: Name,
                    email: Email,
                    password: Password
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

            !isPasswordEmpty(Password)
            ? !isPasswordValid(Password)
                ? setPasswordError('Invalid Password. Please try again')
                : setPasswordError('')
            : setPasswordError('Please enter your password');

        !isPasswordEmpty(PasswordConfirm)
            ? !isPasswordValid(PasswordConfirm)
                ? setPasswordConfirmError('Invalid Password. Please try again')
                : setPasswordConfirmError('')
            : setPasswordConfirmError('Please confirm your password')
        
        setDifferentPasswordError('')
     
        if(Password !== PasswordConfirm && !isPasswordEmpty(Password) && !isPasswordEmpty(PasswordConfirm) && isPasswordValid(Password) && isPasswordValid(PasswordConfirm))
        {
            setDifferentPasswordError('Passwords must match. Please try again')
            setPasswordError('')
            setPasswordConfirmError('')
        }
        else if(Password === PasswordConfirm && !isPasswordEmpty(Password) && !isPasswordEmpty(PasswordConfirm) && !isPasswordValid(Password) && !isPasswordValid(PasswordConfirm))
        {
            setDifferentPasswordError('Passwords must be valid. Please click on the exclamation mark to see the specifcations')
            setPasswordError('')
            setPasswordConfirmError('')
        }
        }
    }
    return (
        <div>
            <div className="containerRegister" >
                <div className="screen" >
                    <div className="screen__content"  >
                        <div className="RegisterForm" style={{paddingTop: '70px'}}>
                            <div className="login__field" >
                                <i className="login__icon"><FaUser /></i>
                                <input type="text" className="login__input" placeholder="Enter your Name" onChange={onRegisterNameChange} />
                                <p style={{  margin: '0', color: 'red' }}>{NameError}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaEnvelope /></i>
                                <input type="email" className="login__input" placeholder="Enter your Email" onChange={onRegisterEmailChange} />
                                <p style={{  margin: '0', color: 'red' }}>{EmailError}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input type="password" className="login__input" placeholder="Enter your Password" onChange={onRegisterPasswordChange} />
                                <i onClick={onShowPasswordErrorClick} style={{cursor: 'pointer'}}>{PasswordErrorClickOpen}</i>
                                <i onClick={onClosePasswordErrorClick} style={{cursor: 'pointer'}}>{PasswordErrorClickClose}</i>
                                <p style={{ margin: '0', color: 'red' }}>{PasswordError}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input type="password" className="login__input" placeholder="Confirm Password" onChange={onPasswordConfirmChange} />
                                <p style={{ margin: '0', color: 'red' }}>{PasswordConfirmError}</p>
                            </div>
                            <p style={{padding: '0', margin: '0', color: 'red' }}>{DifferentPasswordsError}</p>
                            <button style={{marginTop: '0'}} onClick={onRegisterClick} className="button login__submit">
                                <span style={{paddingTop: '0', marginTop: '0'}} className="button__text">Register</span>
                            </button>
                        </div>
                        {PasswordErrorInfo}
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

export default Register;

