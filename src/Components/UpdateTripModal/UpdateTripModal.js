import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import StateSelect from '../StateSelect/StateSelect';
import './UpdateTripModal.css'

class UpdateTripModal extends React.Component {
  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header >
          <Modal.Title style={{ alignText: 'center', margin: '0 auto' }} id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(event) => this.props.handleUpdate(event, this.props.trip._id)} >
            <h2>Update Trip Form</h2>
            <label htmlFor="trip-origin">Trip Origin</label>
            <input type='text' id='trip-origin' placeholder='Good' defaultValue={this.props.trip.tripOrigin} name="tripOrigin" required />
            <StateSelect name='originState' />
            <label htmlFor="trip-destination">Trip Destination</label>
            <input type='text' id='trip-destination' placeholder='Better' defaultValue={this.props.trip.tripDestination} name="tripDestination" required />
            <StateSelect name='destinationState' />
            <label htmlFor="trip-mileage">Vehicle Highway Mileage</label>
            <input type='text' id='trip-mileage' placeholder='Mileage in miles per gallon' defaultValue={this.props.trip.gasMileage} name='gasMileage' required />
            <label htmlFor="trip-gas-price">Average Gas Price</label>
            <input type='text' id='trip-gas-price' placeholder='Cost in $ per gallon' defaultValue={this.props.trip.gasPrice} name='gasPrice' required />
            <label htmlFor="trip-distance">One Way Distance</label>
            <input type='text' id='trip-distance' placeholder='Distance from origin to destination' defaultValue={Math.floor(this.props.trip.distance / 1609.34)} name='tripDistance' required />
            <label htmlFor="trip-duration">One Way Duration</label>
            <input type='text' id='trip-duration' placeholder='Time in minutes' defaultValue={Math.floor(this.props.trip.duration / 60)} name='tripDuration' required />
            <button>Update Trip</button>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.closeUpdateModal}>Close</Button>
          {/* <Button variant='success' onClick={this.props.handleSaveTrip}>Save this Trip</Button> */}
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateTripModal;