import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import './NewTripForm.css';
import NewTripModal from "../NewTripModal/NewTripModal";
import StateSelect from "../StateSelect/StateSelect";
import CarSelectMenu from "../CarSelectMenu/CarSelectMenu";
import Login from '../Auth/Login';

class NewTripForm extends React.Component {

  handleGasMileage = (gasMileage) => {
    let mpgForm = document.querySelector('#gas-mileage')
    mpgForm.value = gasMileage;
  }

  render() {
    return (
      <div className="NewTripCollection">
        {
          this.props.auth0.isAuthenticated ?
            <>
              <div className="NewTripForm">
                <form onSubmit={this.props.handleSubmit} >
                  <h2>New Trip Form</h2>
                  <label htmlFor="trip-origin">Trip Origin</label>
                  <input type='text' id='trip-origin' placeholder='Kalamazoo' name="tripOrigin" required />
                  <StateSelect name='tripOriginState' defaultValue="MI" />
                  <label htmlFor="trip-origin">Trip Destination</label>
                  <input type='text' id='trip-origin' placeholder='Winslow' name="tripDestination" required />
                  <StateSelect name='tripDestinationState' defaultValue="AZ" />
                  <label htmlFor="trip-origin">Vehicle Highway Mileage</label>
                  <input type='text' id='gas-mileage' placeholder='Mileage in miles per gallon' defaultValue={this.props.userCarGasMileage} name='gasMileage' required />
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
                  <CarSelectMenu handleGasMileage={this.handleGasMileage} appHandleGasMileage={this.props.handleGasMileage} />
                </div>


              </div>

            </>
            :
            <div className='welcome'>
              <h1>Welcome to Cheap Trip!</h1>
              <h2>Sign up for free to start planning your trip! </h2>
              <Login />
            </div>
        }
      </div>

    )
  }
}

export default withAuth0(NewTripForm);

