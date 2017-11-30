import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Metsamittari from './components/Metsamittari';
import data from './data/data';

class App extends Component {
    
  constructor(props)
  {
    super(props);

    this.state = {
      Region: []
    };
      
}
     

  componentDidMount()
  {
    data.getRegion().then(data => {
      this.setState({ Region: data });
    })
    .catch(error => {
      console.log("getRegions failed ", error);
    });
  }
    
    
    
  render() {
      
        
      
    return (
      <div className="App">
        <div className="container">
              <Metsamittari 
                    regions={this.state.Region}
                
                        />
        
        </div>
      </div>
    );
  }
}

export default App;
