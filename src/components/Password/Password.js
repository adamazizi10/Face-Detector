import React, { useState } from "react";
import '../Signin/Signin.css'
import { FaLock, FaUserLock, FaExclamationCircle} from 'react-icons/fa';
import CustomFunctions from '../../CustomFunctions/CustomFunctions';

const {displayPasswordSpecificationsC, isPasswordValid, isPasswordEmpty } = CustomFunctions;
function Password({id, onRouteChange}){
    


    const [Password, setPassword] = useState('');
    const [PasswordConfirm, setPasswordConfirm] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [PasswordConfirmError, setPasswordConfirmError] = useState('');
    const [DifferentPasswordsError, setDifferentPasswordError] = useState('');
    const [BackendError, setBackendError] = useState('');
    const [PasswordErrorInfo, setPasswordErrorInfo] = useState('');
    const [PasswordErrorClickOpen, setPasswordErrorClickOpen] = useState(<FaExclamationCircle />);
    const [PasswordErrorClickClose, setPasswordErrorClickClose] = useState('');
    const [displayPasswordChangedConfirmation, setdisplayPasswordChangedConfirmation] = useState('');
    const setAllPasswordErrors = (PassError, ToggleCloseError, ToggleOpenError) => {
        setPasswordErrorInfo(PassError)
        setPasswordErrorClickClose(ToggleCloseError)
        setPasswordErrorClickOpen(ToggleOpenError)
    }

    const onShowPasswordErrorClick = () => setAllPasswordErrors(displayPasswordSpecificationsC, <FaExclamationCircle />, '')

    const onClosePasswordErrorClick = () => setAllPasswordErrors('', '' ,<FaExclamationCircle />)

    const onPasswordChange = (event) => setPassword(event.target.value)

    const onPasswordConfirmChange = (event) => setPasswordConfirm(event.target.value)

    const onUpdateClick = (event) => {
    if(Password === PasswordConfirm && isPasswordValid(Password) && isPasswordValid(PasswordConfirm)){ 
            setPasswordError('')
            setPasswordConfirmError('')
            setDifferentPasswordError('')
            setBackendError('')
            event.preventDefault()
            fetch(`https://lit-taiga-06669.herokuapp.com/profile/password/${id}`, {
            // fetch(`http://localhost:3003/profile/password/${id}`, {
                method: 'put',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    password: Password
                })
            })
            .then(res => res.json())
            .then(res => {
                    if (res === 'success') {
                        setdisplayPasswordChangedConfirmation(<p style={{marginLeft: '25px'}}className="w-90 ba br2 pa3 justify-center ma2  green bg-washed-green">Password changed successfully!
                                                                    <button onClick={() => onRouteChange('home')} style={{display: 'inline'}} className="button login__submit">
                                                                        <span>Go to Home Page</span>
                                                                    </button>
                                                                </p>)
                    }
                    else {
                        setBackendError('Cannot use old Password. Please try again')
                        setDifferentPasswordError('')
                        setPasswordError('')
                        setPasswordConfirmError('')
                    }

                })
            }
        else {
            setBackendError('')
            !isPasswordEmpty(Password)
                ? !isPasswordValid(Password)
                    ? setPasswordError('Invalid Password. Please try again')
                    : setPasswordError('')
                : setPasswordError('Please enter your password');

            !isPasswordEmpty(PasswordConfirm)
                ? !isPasswordValid(PasswordConfirm)
                    ? setPasswordConfirmError('Invalid Password. Please try again')
                    : setPasswordConfirmError('')
                : BackendError !== 'Password Invalid' ? setPasswordConfirmError('Please confirm your password') : setPasswordConfirmError('')
            
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
   

return(
    

        <div>
             <div className="containerSignin">
                <div className="screenS">
                    <div className="screen__contentS">
                        <div className="loginP">
                            {displayPasswordChangedConfirmation === ''
                            ? <div><div className="login__field">
                                <i className="login__icon"><FaLock /></i>
                                <input onChange={onPasswordChange} type="password" className="login__input" placeholder="Enter your Password" />
                                <i onClick={onShowPasswordErrorClick} style={{cursor: 'pointer'}}>{PasswordErrorClickOpen}</i>
                                 <i onClick={onClosePasswordErrorClick} style={{cursor: 'pointer'}}>{PasswordErrorClickClose}</i>
                                 <p style={{padding: '0', margin: '0', color: 'red' }}>{PasswordError}</p>

                            </div>
                            <div className="login__field">
                                <i className="login__icon"><FaUserLock /></i>
                                <input onChange={onPasswordConfirmChange} type="password" className="login__input" placeholder="Confirm Password" />
                                <p style={{padding: '0', margin: '0', color: 'red' }}>{PasswordConfirmError}</p>
                            </div>
                            <p style={{padding: '0', margin: '0', color: 'red' }}>{BackendError}</p>
                            <p style={{padding: '0', margin: '0', color: 'red' }}>{DifferentPasswordsError}</p>
                            <button onClick={onUpdateClick} style={{display: 'inline', marginTop: '10px'}} className="button login__submit">
                                <span>Update Password</span>
                            </button>
                            <button onClick={() => onRouteChange('home')} style={{display: 'inline'}} className="button login__submit">
                                <span>Cancel</span>
                            </button>{PasswordErrorInfo}</div>
                            
                                :<div>{displayPasswordChangedConfirmation}</div>
                                }
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

        

    

)

}
export default Password;