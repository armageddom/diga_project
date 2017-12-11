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
        RegionLevel: [],
        RegID: "",
        Regíon: []
    };
      

      
}
     

  componentDidMount()
  {
      
    data.getRegion().then(data => {
      this.setState({ Regíon: data });
    })
    .catch(error => {
      console.log("getDeeper failed ", error);
    });
   
  

    data.getRegionLevel().then(data => {
      this.setState({ RegionLevel: data });
    })
    .catch(error => {
      console.log("getRegions failed ", error);
    });
      

    
  }
    
    
    
  render() {
      
        
      
    return (
      <div className="App">
        <div className="container">
            <Metsamittari regionLevels={this.state.RegionLevel} regions={this.state.Regíon} />
            
        </div>
      </div>
    );
  }
}

export default App;
