import React from "react";
import './SavedTripsPage.css';
import SavedTrip from "../SavedTrip/SavedTrip";
import UpdateTripModal from "../UpdateTripModal/UpdateTripModal";


class SavedTripsPage extends React.Component {
  render() {
    return (
      <div className="SavedTripsPage">
        {this.props.tripList.map(trip => {
          return (
            <SavedTrip
              trip={trip}
              key={trip._id}
              handleDelete={this.props.handleDelete}
              openUpdateModal={this.props.openUpdateModal}
            />
          )
        })}
        <UpdateTripModal 
        show={this.props.showUpdateModal} 
        closeUpdateModal={this.props.closeUpdateModal}/>
      </div>
    )
  }
}

export default SavedTripsPage;