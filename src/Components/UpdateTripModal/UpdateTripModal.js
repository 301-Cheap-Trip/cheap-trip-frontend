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
          <form>
            <h2>New Trip Form</h2>
            <label htmlFor="trip-origin">Trip Origin</label>
            <input type='text' id='trip-origin' placeholder='Good' name="tripOrigin" required />
            <StateSelect name='originState' />
            <label htmlFor="trip-origin">Trip Destination</label>
            <input type='text' id='trip-origin' placeholder='Better' name="tripDestination" required />
            <StateSelect name='destinationState' />
            <label htmlFor="trip-origin">Vehicle Highway Mileage</label>
            <input type='text' id='trip-origin' placeholder='Mileage in miles per galon' defaultValue={25} name='gasMileage' required />
            <button>Calculate Trip</button>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.closeUpdateModal}>Close</Button>
          <Button variant='success' onClick={this.props.handleSaveTrip}>Save this Trip</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateTripModal;