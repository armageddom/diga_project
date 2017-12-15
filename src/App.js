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
        LowerRegID:1,
        Regíon: [],
        Scenario: [],
        ScenID: 1
    };
      
    this.ChangeID = this.ChangeID.bind(this);
    this.GetScen = this.GetScen.bind(this);
    this.getLowRegId = this.getLowRegId.bind(this);
}

    ChangeID(e)  { 
        
        var arrs = [];

        for (var key in e) {
              arrs.push(e[key]);
            //console.log(arrs);
        }
        
      
        this.setState({RegID: arrs});
        
        data.getRegion(this.state.RegID).then(data => {
              this.setState({ Regíon: data });
            })
            .catch(error => {
              console.log("getDeeper failed ", error);
        });
        
        
        
        } 
        
    GetScen(f) {
        
        

        var arrs2 = [];
        
        for (var key1 in f) {
            arrs2.push(f[key1]);
            //console.log(arrs2);
        }
        
        
          
        this.setState({ScenID: arrs2});
        
        
        
    
        data.getScenario(this.state.LowerRegID,this.state.ScenID).then(data => {
              this.setState({ Scenario: data });
            })
            .catch(error => {
              console.log("getScens failed ", error);
        });
        
        
        
        
    }
    
    getLowRegId(e){
        
        var arrs1 = [];

        
        for (var key in e) {
            arrs1.push(e[key]);
            //console.log(arrs1);
        }
        
        
        this.setState({LowerRegID: arrs1});

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
            <Metsamittari regionLevels={this.state.RegionLevel} regions={this.state.Regíon} onSelectLevel={this.ChangeID.bind(this)} ongetScenari={this.GetScen.bind(this)} ongetLowReg={this.getLowRegId.bind(this)} ScenarioData={this.state.Scenario}/>
          
        </div>
      </div>
    );
  }
}

export default App;
