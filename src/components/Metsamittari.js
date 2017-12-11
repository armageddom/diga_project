import React, { Component } from 'react'
import './Metsamittari.css';
import AppHeader from './AppHeader';
import ListItems from './ListItems';


class Metsamittari extends Component {
    
    

    render () {

        const {regionLevels,regions,onSelectLevel} = this.props;

        
        console.log({onSelectLevel});
        return (
            <div>
                <AppHeader/>
            
                <ListItems Levels={regionLevels} Region={regions} LevelID={onSelectLevel} />
            
            

                    
            </div>
        )
    }
}

export default Metsamittari
            
                   
            