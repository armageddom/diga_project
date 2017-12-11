import React, { Component } from 'react'
import './Metsamittari.css';
import AppHeader from './AppHeader';
import ListItems from './ListItems';


class Metsamittari extends Component {

    render () {

        const {regionLevels,regions} = this.props;

        console.log({regionLevels});
        return (
            <div>
                <AppHeader/>
            
                <ListItems Levels={regionLevels} Region={regions} />
            
            

                    
            </div>
        )
    }
}

export default Metsamittari
            
                   
            