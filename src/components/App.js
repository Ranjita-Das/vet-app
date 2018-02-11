import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css.js';
import data from './data.json';
import AptListItem from './AptListItem.js';
import _ from 'lodash';
import Form from './addAptForm.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      title:"Appointments",
      appointments: [],
      formVisibility: false,
      buttonText: "+ Add Appointment"
    };
    this.deleteItem=this.deleteItem.bind(this);
    this.toggleVisibility=this.toggleVisibility.bind(this);
    this.handleAddApt= this.handleAddApt.bind(this);
  }

  componentDidMount(){
    this.setState ({
      appointments : data,
    })
  }

  deleteItem(item){
    var allApts = this.state.appointments;
    var newApts = _.without(allApts, item);
    this.setState({
      appointments:newApts,
    });
  }

  toggleVisibility(){

    this.setState({
      formVisibility: this.state.formVisibility ? false : true,
      buttonText: this.state.formVisibility ? "+ Add Appointment" : "Fill form and Submit"
    })
  }

  handleAddApt(newApt){
    console.log(newApt);
    var tempAptsList = this.state.appointments;
    tempAptsList.push(newApt);

    this.setState({
      appointments: tempAptsList,
    })    
  }

  render(){
    var formDisplay= {
      display: this.state.formVisibility ? 'block' :'none'
    }

    var filteredApts = this.state.appointments;
    filteredApts = filteredApts.map(function(item, i){
        return(
          <AptListItem
            key = {i}
            singleItem = {item}
            onDelete = {this.deleteItem}
          />
      )
    }.bind(this));

    return(
      <div>
        <div className="addButton" style={{marginBottom:"20px", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <button type="button" class="btn btn-primary btn-block" style={{width:"90%"}} onClick={this.toggleVisibility}>{this.state.buttonText}</button>
        </div>
        <div className="form thumbnail" style={formDisplay}>
          <Form addApt={this.handleAddApt}/>
        </div>
        <div className="interface">

        <ul className="media list-group">
          {filteredApts}
        </ul>
        </div>

      </div>
    )
  }
}


export default App;
