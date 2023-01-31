import React from "react";
import './SavedTripsPage.css';
import SavedTrip from "../SavedTrip/SavedTrip";

class SavedTripsPage extends React.Component {
  render() {
    return (
      <div className="SavedTripsPage">
        {this.props.tripList.map(trip => {
          return (
            <SavedTrip/>
          )
        })}
      </div>
    )
  }
}

export default SavedTripsPage;