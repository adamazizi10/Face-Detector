
import React, { useState } from 'react';
import '../Register/Register.css';
import { FaEnvelope, FaLock, FaUser, FaExclamationCircle, FaRegPlusSquare, FaCalendarAlt } from 'react-icons/fa';
import CustomFunctions from '../../CustomFunctions/CustomFunctions';

const { isPasswordValid, isNameValid, isEmailValid, isPasswordEmpty, isEmailEmpty, displayPasswordSpecifications } = CustomFunctions;
function Profile({ loadUser, onRouteChange, entries, name, email, joined, id }) {

    const [Name, setName] = useState('');
    const [NameError, setNameError] = useState('');
    const [Email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [PasswordErrorInfo, setPasswordErrorInfo] = useState('');
    const [PasswordErrorClickOpen, setPasswordErrorClickOpen] = useState(<FaExclamationCircle />);
    const [PasswordErrorClickClose, setPasswordErrorClickClose] = useState('');
    const [UpdatePasswordButton, setUpdatePasswordOpen] = useState('P');

    const setAllPasswordErrors = (PassError, ToggleCloseError, ToggleOpenError) => {
        setPasswordErrorInfo(PassError)
        setPasswordErrorClickClose(ToggleCloseError)
        setPasswordErrorClickOpen(ToggleOpenError)
    }

    const onRegisterNameChange = (event) => setName(event.target.value)

    const onRegisterEmailChange = (event) => setEmail(event.target.value)

    const onRegisterPasswordChange = (event) => setPassword(event.target.value);

    const onShowPasswordErrorClick = () => setAllPasswordErrors(displayPasswordSpecifications, <FaExclamationCircle />, '')

    const onClosePasswordErrorClick = () => setAllPasswordErrors('', '', <FaExclamationCircle />)

    const onUpdatePasswordClick = () => setUpdatePasswordOpen('')

    const onDontUpdatePasswordClick = () => setUpdatePasswordOpen('P')

    const onRegisterClick = (event) => !UpdatePasswordButton === '' ? updateInfoWithoutPassword(event, id) : updateInfoWithPassword(event, id)

    const updateInfoWithPassword = (event, id) => {
        if (isPasswordValid(Password) && isNameValid(Name) && isEmailValid(Email)) {
            setNameError('')
            setEmailError('')
            setPasswordError('')
            event.preventDefault()
            // fetch('https://lit-taiga-06669.herokuapp.com/register', {
            fetch(`http://localhost:3003/profile/${id}`, {
                method: 'put',
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
        }


    }

    const updateInfoWithoutPassword = (event, id) => {
        if (isNameValid(Name) && isEmailValid(Email)) {
            setNameError('')
            setEmailError('')
            event.preventDefault()
            // fetch('https://lit-taiga-06669.herokuapp.com/register', {
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
            <div className="containerRegister">
                <div className="screen">
                    <div className="screen__content">
                        <div className="UpdateForm">
                            <div className="login__field">
                                <i className="login__icon"><FaUser /></i>
                                <input type="text" className="login__input" defaultValue={name} onChange={onRegisterNameChange} />
                                <p style={{ color: 'red' }}>{NameError}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaEnvelope /></i>
                                <input type="email" className="login__input" defaultValue={email} onChange={onRegisterEmailChange} />
                                <p style={{ color: 'red' }}>{EmailError}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaRegPlusSquare /></i>
                                <input type="email" className="login__input" style={{ backgroundColor: '#d7dada' }} readOnly defaultValue={`Images Detected: ${entries}`} />
                                <p style={{ color: 'red' }}>{EmailError}</p>
                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaCalendarAlt /></i>

                                <input type="email" className="login__input" style={{ backgroundColor: '#d7dada' }} readOnly defaultValue={`Joined: ${joined.substring(0, joined.length - 14)}`} />
                                <p style={{ color: 'red' }}>{EmailError}</p>
                            </div>


                            {UpdatePasswordButton === '' ?
                                <div>
                                    <button onClick={onDontUpdatePasswordClick} className="button login__submit">
                                        <span style={{ paddingTop: '0', marginTop: '0' }} className="button__text">Do not change Password</span>
                                    </button>
                                    <div className="login__field">
                                        <i className="login__icon"><FaLock /></i>
                                        <input type="password" className="login__input" placeholder="Enter new Password" onChange={onRegisterPasswordChange} />
                                        <i onClick={onShowPasswordErrorClick} style={{ cursor: 'pointer' }}>{PasswordErrorClickOpen}</i>
                                        <i onClick={onClosePasswordErrorClick} style={{ cursor: 'pointer' }}>{PasswordErrorClickClose}</i>
                                        <p style={{ color: 'red' }}>{PasswordError}</p>
                                    </div>
                                </div>
                                : <button onClick={onUpdatePasswordClick} className="button login__submit">
                                    <span style={{ paddingTop: '0', marginTop: '0' }} className="button__text">Change Password</span>
                                </button>
                            }
                            <button onClick={onRegisterClick} className="button login__submit">
                                <span style={{ paddingTop: '0', marginTop: '0' }} className="button__text">Update</span>
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

export default Profile;

