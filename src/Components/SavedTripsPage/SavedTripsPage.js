import React from "react";
import './SavedTripsPage.css';
import SavedTrip from "../SavedTrip/SavedTrip";
import UpdateTripModal from "../UpdateTripModal/UpdateTripModal";
import SavedTripModal from "../SavedTripModal/SavedTripModal";


class SavedTripsPage extends React.Component {
  componentDidMount () {
    this.props.getTrips();
  }

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
              openSavedTripModal={this.props.openSavedTripModal}
            />
          )
        })}
        <UpdateTripModal 
        show={this.props.showUpdateModal} 
        closeUpdateModal={this.props.closeUpdateModal}
        handleUpdate={this.props.handleUpdate}
        trip={this.props.updatingTrip}/>

        <SavedTripModal 
        currentTrip={this.props.savedTripModalDetails}
        show={this.props.showSavedTripModal}
        closeSavedTripModal={this.props.closeSavedTripModal}/>
      </div>
    )
  }
}

export default SavedTripsPage;