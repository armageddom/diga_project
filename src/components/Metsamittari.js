import React, { Component } from 'react'
import './Metsamittari.css';
import AppHeader from './AppHeader';
import ListItems from './ListItems';


class Metsamittari extends Component {
    
  constructor(props)
  {
    super(props);

      
    this.state = { value: 0 }
      
   
    this.onSelectLevel = this.GetLevelID.bind(this)
  }
    
    GetLevelID(asd)  { 
        this.setState({value: asd});
        this.props.onSelectLevel(asd)
        } 
        

   
    render () {

        const {regionLevels,regions,onSelectLevel} = this.props;

        var arr = [];

        for (var key in this.state.value) {
              arr.push(this.state.value[key]);
            }
        
        return (
            <div>
                <AppHeader/>
                <h2>{arr}</h2>
                <ListItems Levels={regionLevels} Region={regions} LevelID={this.onSelectLevel.bind(this)}  />
               
            

                    
            </div>
        )
    }
}

export default Metsamittari
            
                   
            