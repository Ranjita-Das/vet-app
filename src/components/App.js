import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      title:"Appointments",
      data: [
        {
          "petName": "Buffy",
          "ownerName": "Hassum Harrod",
          "aptDate": "2016-06-20 15:30",
          "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
        },
        {
          "petName": "Spot",
          "ownerName": "Constance Smith",
          "aptDate": "2016-06-24 08:30",
          "aptNotes": "This German Shepherd is having some back pain"
        },
        {
          "petName": "Goldie",
          "ownerName": "Barot Bellingham",
          "aptDate": "2016-06-22 15:50",
          "aptNotes": "This Goldfish has some weird spots in the belly"
        },
        {
          "petName": "Mitten",
          "ownerName": "Hillary Goldwyn",
          "aptDate": "2016-06-21 9:15",
          "aptNotes": "Cat has excessive hairballs"
        }
      ]
    };
  }

  render(){

    var filteredApts = this.state.data;
    filteredApts = filteredApts.map(function(item, i){
        return(
          <li className="container list-group-item" key={i} style={{listStyle:"none", paddingBottom:"15px", paddingTop:"15px"}}>
              <div className="col-xs-10">
                <h3 style={{marginTop:"0px"}}>{this.state.data[i].petName}</h3>
                <p>{this.state.data[i].ownerName}</p>
                <p>{this.state.data[i].aptNotes}</p>
              </div>

              <div classname="col-xs-2">
                {this.state.data[i].aptDate}
              </div>
          </li>
      )
    }.bind(this));

    return(
      <div className="interface">
      <ul className="media list-group">
        {filteredApts}
      </ul>
      </div>
    )
  }
}

export default App;
