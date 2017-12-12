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
        RegID: 1,
        Regíon: []
    };
      
    this.ChangeID = this.ChangeID.bind(this);

      
}

    ChangeID(e)  { 
        
        var arrs = [];

        for (var key in e) {
              arrs.push(e[key]);
            console.log(arrs);
        }
        
      
        this.setState({RegID: arrs});
        
        data.getRegion(this.state.RegID).then(data => {
              this.setState({ Regíon: data });
            })
            .catch(error => {
              console.log("getDeeper failed ", error);
        });
        
        
        
        } 
        

    componentDidMount()
    {
      


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
           <h2>{this.state.RegID}</h2>

            <Metsamittari regionLevels={this.state.RegionLevel} regions={this.state.Regíon} onSelectLevel={this.ChangeID.bind(this)} />
          
        </div>
      </div>
    );
  }
}

export default App;
