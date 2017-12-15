import React, { Component } from 'react'
import './Metsamittari.css';
import AppHeader from './AppHeader';
import ListItems from './ListItems';


class Metsamittari extends Component {
    
  constructor(props)
  {
    super(props);

      
    this.state = { value: 0,
                    ScenidValue: 0,
                    LowerRegValue: 0}
      
   
    this.onSelectLevel = this.GetLevelID.bind(this)
    this.ongetScenari = this.GetScenarioID.bind(this)
    this.ongetLowReg = this.GetLowReg.bind(this)
  }
    
    GetLevelID(asd)  { 
        this.setState({value: asd});
        this.props.onSelectLevel(asd)
        } 
    
    GetScenarioID(luku1)
    {
        this.setState({ScenidValue: luku1});
        
        //console.log(luku1,luku2);
        this.props.ongetScenari(luku1)        
    }
    
    GetLowReg(luku1){
        
        this.setState({LowerRegValue: luku1});
        this.props.ongetLowReg(luku1)  
    }
        

   
    render () {

        const {regionLevels,regions,onSelectLevel,ongetScenari,ScenarioData} = this.props;

        var arr = [];
        var scID = [];
        var LowRegId = [];
        
        
        for (var key1 in this.state.value) {
              arr.push(this.state.value[key1]);
            }
        
        
        for (var key2 in this.state.ScenidValue) {
              scID.push(this.state.ScenidValue[key2]);
            //console.log(scID);
            }
        
        for (var key3 in this.state.LowerRegValue) {
              LowRegId.push(this.state.LowerRegValue[key3]);
            //console.log(LowRegId);
            
            }
        
        
        return (
            <div>
                <AppHeader/>
                <ListItems Levels={regionLevels} Region={regions} LevelID={this.onSelectLevel.bind(this)} ScenarioID={this.ongetScenari.bind(this)} LowReg={this.ongetLowReg.bind(this)} Scens={ScenarioData} />
               
            

                    
            </div>
        )
    }
}

export default Metsamittari
            
                   
            