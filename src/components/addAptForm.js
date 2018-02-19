import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Form extends Component{
  constructor(props){
    super(props);
    this.handleAdd=this.handleAdd.bind(this);
  }

  handleAdd(e){
    var newApt={
      petName : this.refs.petName.value,
      ownerName: this.refs.ownerName.value,
      aptDate : this.refs.aptDate.value,
      notes: this.refs.notes.value,
    }
    e.preventDefault();
    this.props.addApt(newApt);
  }


  render(){
    return(
      <div style={{paddingLeft: "5%", paddingRight: "5%", marginBottom:"20px"}}>
      <form onSubmit={this.handleAdd}>
        <div className="form-group">
          <label for="pet">Pet Name:</label>
          <input type="text" className="form-control" id="pet" ref="petName" />
        </div>
        <div className="form-group">
          <label for="owner">Owner Name:</label>
          <input type="text" className="form-control" id="owner" ref="ownerName"/>
        </div>

        <div className="form-group">
          <label for="aptDate">Appointment Date:</label>
          <input type="date" className="form-control" id="aptDate" ref="aptDate"/>
        </div>

        <div className="form-group">
          <label for="notes">Notes:</label>
          <textarea className="form-control" id="notes" ref="notes"></textarea>
        </div>

        <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <hr />
      </div>

    )
  }
}

export default Form;
