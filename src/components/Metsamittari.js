import React, { Component } from 'react'
import './Metsamittari.css';
import AppHeader from './AppHeader';
import ListItems from './ListItems';


class Metsamittari extends Component {

    render () {

        const {regions} = this.props;


        return (
            <div>
                <AppHeader/>
            
                <ListItems Region={regions}/>
            
            

                    
            </div>
        )
    }
}

export default Metsamittari
            
                   
            