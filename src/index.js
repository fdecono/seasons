import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    console.log('DidMount');
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      error => this.setState({errorMessage: error.message})
    );
  }

  componentDidUpdate() {
    console.log('DidUpdate');
  }

  render() {
    // return (
    //   <div>
    //     Latitude: {this.state.lat}
    //     <br />
    //     Error: {this.state.errorMessage}
    //   </div>
    // );
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    } else {
      return <Loader />
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
