import React, { Component } from 'react'
import './listItems.css';
import Dropdown from 'react-dropdown'

class ListItems extends Component {
    render () {
        

      
        const {Levels,Region} = this.props;
       
        

        const Aluetaso = Levels.map((taso) =>
          <li key={taso.id}>
            {taso.name}
          </li>
        );
        
        

        
        const Alue = Region.map((alue) =>
          <li key={alue.id}>
            {alue.name}
          </li>
        );


        
      
        return (
        
            
               <div className="row">
                    <div className="col-xs-4">
                        <h4> Aluetaso</h4>

                             <Dropdown options={Aluetaso} onChange={this._onSelect} placeholder="Select an option" />
            
                       <h4> Alue</h4>
            
                            <Dropdown options={Alue} onChange={this._onSelect} placeholder="Select an option" />
                       <h4> Skenaariokokoelma</h4>
            
                            <div class="dropdown">
                              <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown trigger
                                <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dLabel">
                                ...
                              </ul>
                            </div>
            
                        <h4>Sekenaariot</h4>
            
                              <form class="form-horizontal" role="form">
                                <div class="control-group">
                                    <div class="controls">
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-0" value="0" checked="checked" type="radio" />Radio 0 </label>
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-1" value="1" type="radio" />Radio 1</label>
                                    </div>
                                </div>
                            </form>
                                
                        <h4>AjanKohta</h4>
            
                               <form class="form-horizontal" role="form">
                                <div class="control-group">
                                    <div class="controls">
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-0" value="0" checked="checked" type="radio" />Radio 0 </label>
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-1" value="1" type="radio" />Radio 1</label>
                                    </div>
                                </div>
                            </form>
                    </div>
                    <div className="col-xs-4">
                        
                    </div>
            
                    <div className="col-xs-4">
                        <h4>Puuntuotanto*</h4>
            
                               <form class="form-horizontal" role="form">
                                <div class="control-group">
                                    <div class="controls">
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-0" value="0" checked="checked" type="radio" />Radio 0 </label>
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-1" value="1" type="radio" />Radio 1</label>
                                    </div>
                                </div>
                            </form>
            
                        <h4>Keruutuotteet*</h4>
            
                               <form class="form-horizontal" role="form">
                                <div class="control-group">
                                    <div class="controls">
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-0" value="0" checked="checked" type="radio" />Radio 0 </label>
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-1" value="1" type="radio" />Radio 1</label>
                                    </div>
                                </div>
                            </form> 
                       <h4>Monimuotoisuus*</h4>
            
                               <form class="form-horizontal" role="form">
                                <div class="control-group">
                                    <div class="controls">
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-0" value="0" checked="checked" type="radio" />Radio 0 </label>
                                        <label label-default="" class="radio">
                                            <input name="radios" id="radios-1" value="1" type="radio" />Radio 1</label>
                                    </div>
                                </div>
                            </form>
                    <h4>Hiili*</h4>
                        Hiilien määrä
                    <h4>Muut*</h4>
                        Biomassa

                       
                    </div>
            
                </div>
               
            
        )
    }
}

export default ListItems