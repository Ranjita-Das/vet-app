import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class AptListItem extends Component{


  handleDelete(){
    this.props.onDelete(this.props.singleItem);
  }

  render(){

    return(
      <li className="container list-group-item" style={{listStyle:"none", paddingBottom:"15px", paddingTop:"15px"}}>
          <div className="col-xs-1">
            <button className="btn btn-xs btn-danger" onClick={this.handleDelete.bind(this)}>X</button>
          </div>

          <div className="col-xs-9">
            <h3 style={{marginTop:"0px"}}>{this.props.singleItem.petName}</h3>
            <p>{this.props.singleItem.ownerName}</p>
            <p>{this.props.singleItem.aptNotes}</p>
          </div>

          <div classname="col-xs-2">
            {this.props.singleItem.aptDate}
          </div>
      </li>
    )
  }
}

export default AptListItem;
