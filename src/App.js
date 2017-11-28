import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Metsamittari from './components/Metsamittari';

class App extends Component {
  render() {
      
        
      
    return (
      <div className="App">
        <div className="container">
              <Metsamittari />
        
        </div>
      </div>
    );
  }
}

export default App;
