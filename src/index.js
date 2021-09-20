import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

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

  // If we have conditional render logic, we should put it in a helper method, not in the render() itself
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    } else {
      return <Loader message='Please accept location request'/>
    }
  }

  render() {
    //example of why we should use the helper method: I want to show whatever I render, with a red border:
    return (
      <div className='border red'>
        { this.renderContent() }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
