import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import './NewTripModal.css';


class NewTripModal extends React.Component {
  render() {
    let distanceMiles = Math.floor(this.props.currentTrip.distance / 1609.34);
    let gasMileage = this.props.currentTrip.gasMileage;
    let gasPrice = this.props.gasPrice;
    let tripDuration = this.props.currentTrip.duration;
    let minutes = Math.round((tripDuration % 3600) / 60);
    let hours = (tripDuration - (tripDuration % 3600))/3600;
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header >
          <Modal.Title style={{alignText: 'center', margin: '0 auto'}} id="contained-modal-title-vcenter">
            {this.props.currentTrip.tripOrigin} - {this.props.currentTrip.tripDestination}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{textAlign: 'center'}}>Driving</h4>
<ul> <u>Trip Information</u>
    <li>One way drive time - {hours} hours {minutes} minutes</li>
  <li>One way distance - {distanceMiles} miles</li>
  <li>Gas Mileage - {gasMileage} mpg</li>
  <li>Average Gas Price - {gasPrice}</li>
  <li>Total Gas Cost One Way- ${((distanceMiles/+gasMileage) * gasPrice).toFixed(2)}</li>
  <li>Total Gas Cost Round Trip- ${((distanceMiles/+gasMileage) * gasPrice).toFixed(2) * 2}</li>
</ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.closeNewTripModal}>Close</Button>
          <Button variant='success' onClick={this.props.handleSaveTrip}>Save this Trip</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewTripModal;
