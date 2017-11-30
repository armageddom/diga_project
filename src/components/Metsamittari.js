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
                {
                    regions.map(region => <ListItems key={region.id}
                                                            {...region}/> )
                   
                }

                    
            </div>
        )
    }
}

export default Metsamittari
            
                   
            