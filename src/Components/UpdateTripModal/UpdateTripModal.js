import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import './UpdateTripModal.css'

class UpdateTripModal extends React.Component {
  render() {
    return (
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
        style={{ backgroundColor: '#13131390', fontFamily: 'righteous' }}
      >
        <Modal.Header style={{ backgroundColor: 'cadetblue', borderBottom: 'none' }}><h2 style={{ margin: '0 auto', textAlign: 'center' }}>Change Trip Details</h2></Modal.Header>
        <Modal.Body style={{ backgroundColor: 'cadetblue', borderBottom: 'none', padding: '15px 0' }}>

          <form className='UpdateTripForm' onSubmit={(event) => this.props.handleUpdate(event, this.props.trip._id, this.props.trip)} >
            <label htmlFor="trip-mileage">Vehicle Highway Mileage</label>
            <input type='text' id='trip-mileage' placeholder='Mileage in miles per gallon' defaultValue={this.props.trip.gasMileage} name='gasMileage' required />
            <label htmlFor="trip-gas-price">Average Gas Price</label>
            <input type='text' id='trip-gas-price' placeholder='Cost in $ per gallon' defaultValue={this.props.trip.gasPrice} name='gasPrice' required />

            <label htmlFor="trip-duration">One Way Duration (in minutes)</label>
            <input type='text' id='trip-duration' placeholder='Time in minutes' defaultValue={Math.floor(this.props.trip.duration / 60)} name='tripDuration' required />
            <button className='submitButton'>Update Trip</button>
          </form>

        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'cadetblue', borderTop: 'none', marginTop: '0' }} >
          <Button style={{ marginTop: '0' }} variant='secondary' onClick={this.props.closeUpdateModal}>Close</Button>
          {/* <Button variant='success' onClick={this.props.handleSaveTrip}>Save this Trip</Button> */}
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateTripModal;