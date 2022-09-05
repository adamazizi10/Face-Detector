import React from 'react';
import './Signin.css';
import { FaEnvelope, FaLock, FaChevronRight } from 'react-icons/fa';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://lit-taiga-06669.herokuapp.com/signin', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })

        })
          .then(response => response.json())
          .then(user => {
            if(user.id)
            {
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
    }

    render(){
        const { onRouteChange } = this.props;
        return (
            <div>
                <div  className="containerSignin">
                    <div className="screen">
                        <div className="screen__content">
                            <div className="login">
                                <div className="login__field">
                                    <i className="login__icon"><FaEnvelope /></i>
                                    <input onChange={this.onEmailChange} type="text" className="login__input" placeholder="Enter your Email" />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon"><FaLock /></i>
                                    <input onChange={this.onPasswordChange} type="password" className="login__input" placeholder="Enter your Password" />
                                </div>
                                <button onClick={this.onSubmitSignIn} className="button login__submit">
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
}

export default Signin;