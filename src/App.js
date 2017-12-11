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
        RegID: 0,
        Regíon: []
    };
      
    this.handleLevelID = this.handleLevelID.bind(this);

      
}

    handleLevelID()  { (idValue) => {
        this.setState({RegID: idValue});   
        } 
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
            <span>{this.state.RegID}</span>
            <Metsamittari regionLevels={this.state.RegionLevel} regions={this.state.Regíon} onSelectLevel={this.handleLevelID} />
            
        </div>
      </div>
    );
  }
}

export default App;
