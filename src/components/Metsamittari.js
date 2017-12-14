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
                    LoverRegValue: 0}
      
   
    this.onSelectLevel = this.GetLevelID.bind(this)
    this.ongetScenari = this.GetScenarioID.bind(this)
  }
    
    GetLevelID(asd)  { 
        this.setState({value: asd});
        this.props.onSelectLevel(asd)
        } 
    
    GetScenarioID(luku1,luku2)
    {
        this.setState({ScenidValue: luku1});
        this.setState({LoverRegValue: luku2});
        this.props.ongetScenari(luku1,luku2)        
    }
        

   
    render () {

        const {regionLevels,regions,onSelectLevel,ongetScenari} = this.props;

        var arr = [];
        var scID = [];
        var LowRegId = [];
        
        
        for (var key1 in this.state.value) {
              arr.push(this.state.value[key1]);
            }
        
        
        for (var key2 in this.state.ScenidValue) {
              scID.push(this.state.ScenidValue[key2]);
            }
        
        for (var key3 in this.state.LoverRegValue) {
              LowRegId.push(this.state.LoverRegValue[key3]);
            }
        
        
        return (
            <div>
                <AppHeader/>
                <h2>{scID,LowRegId}</h2>
                <ListItems Levels={regionLevels} Region={regions} LevelID={this.onSelectLevel.bind(this)} ScenarioID={this.ongetScenari.bind(this)}  />
               
            

                    
            </div>
        )
    }
}

export default Metsamittari
            
                   
            