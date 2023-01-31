import React from "react";
import './SavedTrip.css';
import Button from "react-bootstrap/esm/Button";

class SavedTrip extends React.Component {
  render() {
    return (
      <div className="SavedTrip">
        <h4>tripOrigin - tripDesination</h4>
        <p>Round Trip Cost</p>
        <p>Time in hours and minutes</p>
        <div className="button-group">
        <Button className="button" variant="info" >View More</Button>
        <Button className="button" variant="warning" >Edit</Button>
        <Button className="button" variant="danger" >Delete</Button>
        </div>
      </div>
    )
  }
}

export default SavedTrip;