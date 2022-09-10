import React, { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';
import Profile from './components/Profile/Profile';
import Password from './components/Password/Password';
import './App.css';



const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'Signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }
  
  calculateFaceLocation = (data) => {
    const clarafaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarafaiFace.left_col * width,
      topRow: clarafaiFace.top_row * height,
      rightCol: width - (clarafaiFace.right_col * width),
      bottomRow: height - (clarafaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }


  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://lit-taiga-06669.herokuapp.com/imageurl', {
      // fetch('http://localhost:3003/imageurl', {  
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://lit-taiga-06669.herokuapp.com/image', {
            // fetch('http://localhost:3003/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log('The error is: ', err));
  }


  onRouteChange = (route) => {
    if (route === 'signout' || route === 'Signin') {
      this.setState(initialState)
    }
    else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }
  render() {
    const { isSignedIn, imageUrl, route, box, user} = this.state;

    return (
      
      <div className="App">
        <Navigation route={route} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <SocialMediaBar />
        {route === 'home'
          ? <div>
            <br /><br /><br />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
          : (
            route === 'Signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              :(route ==='Profile'
                ? <Profile name={user.name} email={user.email} entries={user.entries} joined={user.joined} id={user.id }loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                : (route === 'Password'
                    ? <Password id={user.id} onRouteChange={this.onRouteChange} />
                    : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                  )
                )
          )}


      </div>
    );
  }
}

export default App;

