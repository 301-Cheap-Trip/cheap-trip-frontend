import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import './NewTripForm.css';
import NewTripModal from "../NewTripModal/NewTripModal";
import StateSelect from "../StateSelect/StateSelect";
import CarSelectMenu from "../CarSelectMenu/CarSelectMenu";

class NewTripForm extends React.Component {
  render() {
    return (
      <>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <div className="NewTripForm">
                <form onSubmit={this.props.handleSubmit} >
                  <h2>New Trip Form</h2>
                  <label htmlFor="trip-origin">Trip Origin</label>
                  <input type='text' id='trip-origin' placeholder='Good' name="tripOrigin" required />
                  <StateSelect name='tripOriginState' />
                  <label htmlFor="trip-origin">Trip Destination</label>
                  <input type='text' id='trip-origin' placeholder='Better' name="tripDestination" required />
                  <StateSelect name='tripDestinationState' />
                  <label htmlFor="trip-origin">Vehicle Highway Mileage</label>
                  <input type='text' id='trip-origin' placeholder='Mileage in miles per galon' defaultValue={25} name='gasMileage' required />
                  <button>Calculate Trip</button>
                </form>
                <NewTripModal
                  show={this.props.receivedTripInfo}
                  onHide='Needs function that changes state - receivedTripInfo: false'
                  closeNewTripModal={this.props.closeNewTripModal}
                  currentTrip={this.props.currentTrip}
                  gasPrice={this.props.gasPrice}
                  handleSaveTrip={this.props.handleSaveTrip}
                 />
                 
                 <div className="carSelectBox">
        <h4>Don't know your gas mileage?</h4>
        <p>Look it up here</p>
        <CarSelectMenu/>
      </div>
                 
                 
              </div>
              
            </>
            :
            <div className='welcome'>
              <h1>Welcome to Cheap Trip!</h1>
              <h2>Sign up for free to start planning your trip! </h2>
            </div>
        }
      </>

    )
  }
}

export default withAuth0(NewTripForm);

