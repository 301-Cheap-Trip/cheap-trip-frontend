import React from "react";
import './SavedTrip.css';
import Button from "react-bootstrap/esm/Button";

class SavedTrip extends React.Component {

  handleHandleDelete = () => {
    this.props.handleDelete(this.props.trip._id);
  }

  render() {
    let distanceMiles = Math.floor(this.props.trip.distance / 1609.34);
    let gasMileage = this.props.trip.gasMileage;
    let gasPrice = this.props.trip.gasPrice;
    let tripDuration = this.props.trip.duration;
    let minutes = Math.round((tripDuration % 3600) / 60);
    let hours = (tripDuration - (tripDuration % 3600))/3600;
    return (
      <div className="SavedTrip">
        <h4>{this.props.trip.tripOrigin} - {this.props.trip.tripDestination}</h4>
        <p>Expenses - ${((distanceMiles / gasMileage) * gasPrice * 2).toFixed(2)}</p>
        <p>{hours} hours {minutes} minutes</p>
        <div className="button-group">
        <Button className="button" variant="info" >View</Button>
        <Button onClick={() => this.props.openUpdateModal(this.props.trip)} className="button" variant="warning" >Edit</Button>
        <Button onClick={this.handleHandleDelete} className="button" variant="danger" >Delete</Button>
        </div>
      </div>
    )
  }
}

export default SavedTrip;