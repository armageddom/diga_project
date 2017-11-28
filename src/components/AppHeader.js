import React, { Component } from 'react'



class AppHeader extends Component {
    render () {
        return (
            <div>
             <h1 className="App-title">METSÄMITTARI</h1>
                <div className="row header">
                    <div className="col-xs-4">
                        Skenaarioiden valina
                    </div>
                    <div className="col-xs-4">
                        
                    </div>
                    <div className="col-xs-4">
                        Indikaattoreiden valinta
                    </div>
                </div>
            </div>
        )
    }
}


export default AppHeader