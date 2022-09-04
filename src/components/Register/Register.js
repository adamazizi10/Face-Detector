import React from 'react';
import './Register.css';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

import Footer from '../Footer/Footer';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }

    onRegisterNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }

    onRegisterEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }
    onRegisterPasswordChange =(event) => {
        this.setState({registerPassword: event.target.value})
    }
    
    onRegisterClick = () => {
        fetch('https://lit-taiga-06669.herokuapp.com/register', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id)
            {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }

        })
    }

    render(){
    return (
        <div>
            <div className="containerRegister">
                <div className="screen">
                    <div className="screen__content">
                        <div className="RegisterForm">
                            <div className="login__field">
                            <i className="login__icon"><FaUser /></i>
                                <input type="text" className="login__input" placeholder="Enter your Name" onChange={this.onRegisterNameChange}/>
                            </div>
                            <div className="login__field">
                            <i className="login__icon"><FaEnvelope /></i>
                                <input type="email" className="login__input" placeholder="Enter your Email" onChange={this.onRegisterEmailChange}/>
                            </div>
                            <div className="login__field">
                            <i className="login__icon"><FaLock /></i>
                                <input type="password" className="login__input" placeholder="Enter your Password" onChange={this.onRegisterPasswordChange}/>
                            </div>
                            <button onClick={this.onRegisterClick} className="button login__submit">
                                <span className="button__text">Register</span>
                            </button>
                        </div>
                        <div className="NewMemberText">
                            <h3>Already a Member?</h3>
                            <div className="RegisterClick">
                                <p onClick={() => this.onRouteChange('Signin')}>Login</p>
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
            {/* <div className='mainFooterforSignin'>
                <footer className='referral-wrapper-for-footer'>

                    <div className='copy-wrapper-footerforSignin'>
                        <div id="copy">
                            Copyright © 2020 — The Wise Foundation
                        </div>
                        <div id="links">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </footer>
            </div> */}
            <Footer />
        </div>


    );
}
}

export default Register;