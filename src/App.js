import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const clarifaiApp = new Clarifai.App({
  apiKey: '2473d5c7efc34aebb73ee5b0d46f82e4'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enabled: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
};

class App extends Component {
  constructor(){
    super();

    this.state = {
      input: ''
    };
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  onButtonSubmit = (event) => {
    console.log('click');
    clarifaiApp.models.predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
    .then(
      function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function(err){

      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={ particlesOptions }
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={ this.onInputChange }
          onButtonSubmit={ this.onButtonSubmit }
        />
        <FaceRecognition 
          imageLink={ this.state.input }
        />
      </div>
    );
  }
}

export default App;
