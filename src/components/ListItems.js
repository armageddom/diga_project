import React, { Component } from 'react'

import './listItems.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ListItems extends Component {
    
  constructor(props)
  {
    super(props);
    this.state = {  obj: null,
                    obj1: null,
                    Scen:[],
                    LowerRegionID: null,
                    ScenID: null,
                    FullScenario: [],
                    Scenari: []
                 }
      
   
    this.handleLevelID = this.handleLevelID.bind(this)
    this.handleRegionID = this.handleRegionID.bind(this)
    this.handleScrenarioID = this.handleScrenarioID.bind(this)
    this.LoadScenarios = this.LoadScenarios.bind(this)
  }

    handleLevelID(e) {
        this.setState({obj: this.props.Levels[e.target.value].id})
        this.props.LevelID({obj: this.props.Levels[e.target.value].id})
        //console.log({obj: this.props.Levels[e.target.value].id})
        }
    
    handleRegionID(e) {
        this.setState({Scen: this.props.Region[e.target.value].scenarioCollections})
        this.setState({LowerRegionID: this.props.Region[e.target.value].id})
        
        this.props.LowReg({LowerRegionID: this.props.Region[e.target.value].id})
        //console.log({LowerRegionID: this.props.Region[e.target.value].id});
        }
    
    handleScrenarioID(e) {
        
        this.setState({ScenID: this.state.Scen[e.target.value].id})
        this.props.ScenarioID({ScenID: this.state.Scen[e.target.value].id})
        //console.log({ScenID: this.state.Scen[e.target.value].id});
        
        if (this.state.ScenID =! null){
            this.LoadScenarios();
        
        }
    }
   
    LoadScenarios(){
        
        var asd = [];
        
        console.log("called LoadScenarios")
        this.setState({FullScenario: this.props.Scens})
        console.log(this.state.FullScenario)
        
        asd = this.state.FullScenario.Scenarios
        
        this.setState({Scenari: asd})
     
    };
    
    render () {
        

        const {Levels,Region,LevelID,ScenarioID,LowReg,Scens} = this.props;
       
        
   
        
        return (
                
            
            
               <div className="row">
                    <div className="col-xs-4">
           
                        <h4> Aluetaso</h4>
                                
                                  <select name="form-field-name" onChange={this.handleLevelID}>
                                    {this.props.Levels.map((option,id) =>
                                        <option key={id} value={id}>
                                            {option.name}
                                        </option>
                                     )}
                                    
                                  </select>
                            
       
                       <h4> Alue</h4>

                                <select name="form-field-name" onChange={this.handleRegionID}>
                                    {this.props.Region.map((option,id) =>
                                        <option key={id} value={id}>
                                            {option.name}
                                        </option>
                                     )}
                                    
                                  </select>
                            
            
                       <h4> Skenaariokokoelma</h4>
            
                                 <select name="form-field-name" onChange={this.handleScrenarioID}>
                                   
                                        {this.state.Scen.map((option,id) =>
                                        <option key={id} value={id}>
                                            {option.name}
                                        </option>
                                     )}
                                    
                                  </select>
                                     


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